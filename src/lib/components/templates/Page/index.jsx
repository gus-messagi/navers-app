import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from '../../atoms/Button';
import naversLogo from '../../../assets/logo.svg';
import { Context } from '../../../context/AuthContext';

const Logo = styled.img`
    height: 3.8rem;
`;

const Header = styled.header`
    padding: 2.4rem 3.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
        font-weight: 600;
        font-size: 1.4rem;
        text-decoration: none;
        color: ${({ theme }) => theme.primary}
    }
`;

const Container = styled.div`
    height: 100%;
`;

const Content = styled.div`
    padding: 0 3.2rem;
    height: 80%;
`;

function Page({ children }) {
    const { handleLogout } = useContext(Context);
    return (
        <Container>
            <Header>
                <Logo src={naversLogo} alt="Logo NaveRS" />
                <Button variant="text" onClick={handleLogout}>Sair</Button>
            </Header>
            <Content>
                { children }
            </Content>
        </Container>
    );
}

Page.propTypes = {
    children: PropTypes.array.isRequired,
};

export default Page;
