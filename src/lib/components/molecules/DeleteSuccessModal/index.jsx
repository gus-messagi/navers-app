import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Modal from '../Modal';
import IconButton from '../../atoms/IconButton';
import closeIcon from '../../../assets/icons/close.svg';

const CloseContent = styled.div`
    display: flex;
    justify-content: flex-end;
`;

function DeleteSuccessModal({ onClick }) {
    return (
        <Modal hasPadding>
            <CloseContent>
                <IconButton
                    src={closeIcon}
                    alt="Botão de fechar modal"
                    onClick={onClick}
                />
            </CloseContent>
            <Modal.Title>Naver excluído</Modal.Title>
            <Modal.Description>Naver excluído com sucesso!</Modal.Description>
        </Modal>
    );
}

DeleteSuccessModal.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default DeleteSuccessModal;
