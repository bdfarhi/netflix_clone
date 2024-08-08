import React , {createContext, useState, useContext} from 'react';
import {Container, Frame, Title, Item, Header, Body, Inner } from "./styles/accordian";


const ToggleContex = createContext();

export default function Accordian({children, ...restProps}){
    return (
        <Container {...restProps}>
            <Inner> {children}</Inner>
        </Container>
    );
};

Accordian.Title = function AccordianTitle({children, ...restProps}){
    return <Title {...restProps}>{children}</Title>;
};
Accordian.Frame = function AccordianFrame({children, ...restProps}){
    return <Frame {...restProps}>{children}</Frame>;
};

Accordian.Item = function AccordianItem({children, ...restProps}){
    const [toggleShow, setToggleShow] = useState(false);

    return <ToggleContex.Provider value={{toggleShow, setToggleShow}}>
                <Item {...restProps}>{children}</Item>
         </ToggleContex.Provider>
};

Accordian.Header = function AccordianItem({children, ...restProps}){
    const {toggleShow, setToggleShow} = useContext(ToggleContex);

    return (
        <Header onClick={() => setToggleShow((toggleShow)=> !toggleShow)} 
            {...restProps}
            >
                {children}
                {/* to print state <pre>{JSON.stringify(toggleShow, null, 2)}</pre>*/}
                {toggleShow ? (
                        <img src="/images/icons/close-slim.png" alt="Close" />
                    ): (
                        <img src="/images/icons/add.png" alt="Open" />
                )}
        </Header>
    );
};
Accordian.Body= function AccordianBody({children, ...restProps}) {
    const {toggleShow} = useContext(ToggleContex);

    return toggleShow ? <Body {...restProps}>{children}</Body> : null;


}