import faqsData from "../fixtures/faqs.json";
import React from 'react';
import {Accordian}  from "../components";
import {OptForm} from "../components"

export function FaqsContainer() {
    return (
        <Accordian>
            <Accordian.Title>Frequently Asked Questions</Accordian.Title>
            {faqsData.map((item)=>(
                <Accordian.Item key={item.id}>
                    <Accordian.Header>{item.header}</Accordian.Header>
                    <Accordian.Body>{item.body}</Accordian.Body>
                </Accordian.Item>
            ))}
            <Accordian.Item />
            <OptForm>
                <OptForm.Input plalceholder="Email Address" />
                <OptForm.Button>Try it now</OptForm.Button>
                <OptForm.Break />
                <OptForm.Text>Ready to watch? Enter your email to create or restart your membership</OptForm.Text>
            </OptForm>
        </Accordian>
    );
}