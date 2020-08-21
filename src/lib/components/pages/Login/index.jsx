import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import Button from '../../atoms/Button';
import Input from '../../atoms/Input';
import naversLogo from '../../../assets/logo.svg';
import { Context } from '../../../context/AuthContext';

const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 448px;
    border: 1px solid ${({ theme }) => theme.primary};
    box-sizing: border-box;
    padding: 2.4rem 0;
    width: 100%;

    .login-input {
        margin: 1.6rem 3.2rem;
    }

    @media screen and (max-width: 460px) {
        max-width: none;
        width: 90%;
    }
`;

const Content = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Logo = styled.img`
    margin-bottom: 2.4rem;
    margin-top: 1.6rem;
`;

function Login() {
    const { handleLogin } = useContext(Context);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleEmailChange(event) {
        setEmail(event.target.value);
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    async function handleSubmit(event) {
        event.preventDefault();
        handleLogin(email, password);
    }

    return (
        <Content>
            <FormStyled onSubmit={handleSubmit}>
                <Logo src={naversLogo} alt="Logo NaveRS" />
                <Input
                    className="login-input"
                    label="E-mail"
                    value={email}
                    type="email"
                    onChange={handleEmailChange}
                    placeholder="E-mail"
                    id="input-email-login"
                />
                <Input
                    className="login-input"
                    label="Senha"
                    value={password}
                    type="password"
                    onChange={handlePasswordChange}
                    placeholder="Senha"
                    id="input-senha-login"
                />
                <Button className="login-input">Entrar</Button>
            </FormStyled>
        </Content>
    );
}

export default Login;
