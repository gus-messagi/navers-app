import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import IconButton from '../IconButton';
import backIcon from '../../../assets/icons/back.svg';

const TitleContent = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 700px;
    margin-bottom: 3.2rem;

    h1 {
        font-size: 2.4rem;
        line-height: 3.6rem;
        margin-left: 2.4rem;
    }
`;

function TitleForm({ children }) {
    const history = useHistory();
    return (
        <TitleContent>
            <IconButton
                onClick={() => history.goBack()}
                src={backIcon}
                alt="Botão de retornar para página anterior"
            />
            <h1>{ children }</h1>
        </TitleContent>
    );
}

TitleForm.propTypes = {
    children: PropTypes.string.isRequired,
};

export default TitleForm;
