import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal';
import Button from '../../atoms/Button';

function DeleteModal({ cancelClick, deleteClick }) {
    return (
        <Modal hasPadding>
            <Modal.Title>Excluir Naver</Modal.Title>
            <Modal.Description>Tem certeza que deseja excluir este Naver?</Modal.Description>
            <Modal.ContentActions>
                <Button
                    variant="outlined"
                    onClick={cancelClick}
                >
                    Cancelar
                </Button>
                <Button onClick={deleteClick}>Excluir</Button>
            </Modal.ContentActions>
        </Modal>
    );
}

DeleteModal.propTypes = {
    cancelClick: PropTypes.func.isRequired,
    deleteClick: PropTypes.func.isRequired,
};

export default DeleteModal;
