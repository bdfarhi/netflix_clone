import React from 'react';
import { JumbotronContainer } from '../containers/jumbotron';
import { FaqsContainer } from '../containers/faqs';
import { FooterContainer } from '../containers/footer';
import {HeaderContainer} from '../containers/header';
import { OptForm } from '../components';
import {Feature} from '../components';

export default function Home() {
    return (
        <>
        <HeaderContainer>
            <Feature>
                <Feature.Title>
                    Unlimited files, TV programs and more.
                </Feature.Title>
                <Feature.SubTitle>
                    Watch anytime. Cancel at any time.
                </Feature.SubTitle>
                <OptForm>
                    <OptForm.Input plalceholder="Email Address" />
                    <OptForm.Button>Try it now</OptForm.Button>
                    <OptForm.Break />
                    <OptForm.Text>Ready to watch? Enter your email to create or restart your membership</OptForm.Text>
                </OptForm>
            </Feature>
        </HeaderContainer>
        <JumbotronContainer />
        <FaqsContainer />
        <FooterContainer />
      </>
    )
}