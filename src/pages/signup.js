import React ,{useState, useContext} from 'react';
import { FirebaseContext } from '../context/firebase';
import {HeaderContainer} from '../containers/header';
import { FooterContainer } from '../containers/footer';
import { Form } from '../components';
import {getAuth, createUserWithEmailAndPassword,updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

export default function Signup(){
    const history = useNavigate();
    const {app} = useContext(FirebaseContext);
    const auth = getAuth(app);
    const [firstName, setFirstName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const isInvalid = firstName ===  '' || password === '' || emailAddress === "";

    const handleSignUp= (event) => {
        event.preventDefault() ;

        createUserWithEmailAndPassword(auth, emailAddress, password)
        .then((result)=> 
            updateProfile(result.user,{
                displayName: firstName,
                photoURL : Math.floor(Math.random() * 5) +1,
            }).then(()=> {
                history(ROUTES.BROWSE);
            })
        )
        .catch((error)=>{
            setFirstName('');
            setPassword('');
            setPassword('');
            setError(error.message);
        });

    };

    return (
        <>
        <HeaderContainer>
            <Form>
                <Form.Title>Sign Up</Form.Title>
                {error && <Form.Error>{error}</Form.Error>}

                <Form.Base onSubmit={handleSignUp} method="POST">
                    <Form.Input
                    placeholder= "First name"
                    value= {firstName}
                    onChange={({target}) => setFirstName(target.value)}
                    />
                    <Form.Input
                    placeholder= "Email address"
                    value= {emailAddress}
                    onChange={({target}) => setEmailAddress(target.value)}
                    />
                    <Form.Input
                    placeholder= "Password"
                    type='password'
                    autoComplete='off'
                    value= {password}
                    onChange={({target}) => setPassword(target.value)}
                    />
                    <Form.Submit disabled={isInvalid} type='submit'>
                        Sign Up
                    </Form.Submit>

                    <Form.Text>
                        Already a user? <Form.Link to='/signin'>Sign in now.</Form.Link>
                    </Form.Text>

                    <Form.TextSmall>
                    This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
                    </Form.TextSmall>
                </Form.Base>
            </Form>
        </HeaderContainer>
        <FooterContainer />
        </>
    );
}