import React from 'react';
import { Image } from 'react-native';

import logo from '~/assets/logo.png';

import Background from '~/components/Background';
import {
    Container,
    Form,
    FormInput,
    SubmitButton,
    SiginLink,
    SiginLinkText,
} from './styles';

export default function SignUp({ navigation }) {
    return (
        <Background>
            <Container>
                <Image source={logo} />

                <Form>
                    <FormInput
                        icon="person-outline"
                        keyboardType="email-address"
                        placeholder="Nome Completo"
                    />

                    <FormInput
                        icon="mail-outline"
                        keyboardType="email-address"
                        autoCorrect={false}
                        placeholder="Digite seu e-mail"
                    />

                    <FormInput
                        icon="lock-outline"
                        secureTextEntry
                        placeholder="Digite sua senha"
                    />
                    <SubmitButton>Acessar</SubmitButton>
                </Form>

                <SiginLink onPress={() => navigation.navigate('SignIn')}>
                    <SiginLinkText>Ja tenho conta</SiginLinkText>
                </SiginLink>
            </Container>
        </Background>
    );
}
