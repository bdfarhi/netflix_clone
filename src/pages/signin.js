import React ,{useState, useContext} from 'react';
import { FirebaseContext } from '../context/firebase';
import {HeaderContainer} from '../containers/header';
import { FooterContainer } from '../containers/footer';
import { Form } from '../components';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import * as ROUTES from '../constants/routes';


export default function Signin(){
    const history = useNavigate();
    const {app} = useContext(FirebaseContext);
    const auth = getAuth(app);
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError]= useState('');

    // check form inputs are valid : email and password 
    const isInvalid = password === '' || emailAddress=== '';
    const handleSignin = (event) => {
        event.preventDefault()

        //firebase works here
        signInWithEmailAndPassword(auth, emailAddress, password)
            .then(()=> {
            //push to browse page 
                history(ROUTES.BROWSE);
            })
            .catch((error) =>{
                setEmailAddress('');
                setPassword('');
                setError(error.message);
            });

    };

    return (
    <>
        <HeaderContainer>
            <Form>
                <Form.Title>
                    Sign In
                </Form.Title>
                {error && <Form.Error>{error}</Form.Error>}

                <Form.Base onSubmit={handleSignin} method="POST">
                    <Form.Input placeholder="Email address"
                    value={emailAddress} 
                    onChange={({target}) => setEmailAddress(target.value)}
                    />
                    <Form.Input placeholder="Password"
                    type="password"
                    autoComplete="off"
                    value={password}
                    onChange= {({target}) => setPassword(target.value)}
                    />
                    <Form.Submit disabled={isInvalid} type="submit" >
                        Sign In
                    </Form.Submit>

                </Form.Base>
                <Form.Text>
                    New to Netflix? <Form.Link  to="/signup">Sign up now.</Form.Link>
                </Form.Text>
                <Form.TextSmall>
                    This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
                </Form.TextSmall>
            </Form>
         </HeaderContainer>
        <FooterContainer />
    </>
    );
}