import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Title from './Title';
import Description from './Description';
import ContentActions from './ContentActions';
import ContentRow from './ContentRow';

const Base = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    z-index: 1000;
    background: rgba(0, 0, 0, 0.5);
    overflow: auto;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Content = styled.div.attrs(({ className }) => ({
    className,
}))`
    background: ${({ theme }) => theme.secondary};
    min-width: 592px;

    p.modal-description {
        margin: 2.4rem 0;
    }

    &.div-padding {
        padding: 3.2rem;
    }

    @media screen and (max-width: 800px) {
        min-width: 0;
        max-width: 660px;
        width: 100%;
    }
`;

function Modal({ children, hasPadding }) {
    return (
        <Base>
            <Content className={hasPadding && 'div-padding'}>
                { children }
            </Content>
        </Base>
    );
}

Modal.Title = Title;
Modal.Description = Description;
Modal.ContentActions = ContentActions;
Modal.ContentRow = ContentRow;

Modal.defaultProps = {
    hasPadding: false,
};

Modal.propTypes = {
    children: PropTypes.element.isRequired,
    hasPadding: PropTypes.bool,
};

export default Modal;
