import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import IconButton from '../../atoms/IconButton';
import deleteIcon from '../../../assets/icons/delete.svg';
import editIcon from '../../../assets/icons/edit.svg';

const Buttons = styled.div`
    display: flex;

    button + button {
        margin-left: 1.6rem;
    }
`;

function ActionsButtons({ className, id, deleteClick }) {
    const history = useHistory();

    return (
        <Buttons className={className}>
            <IconButton
                src={deleteIcon}
                alt="Botão de deletar"
                onClick={deleteClick}
            />
            <IconButton
                src={editIcon}
                alt="Botão de edição"
                onClick={() => history.push(`/naver/update/${id}`)}
            />
        </Buttons>
    );
}

ActionsButtons.defaultProps = {
    className: '',
};

ActionsButtons.propTypes = {
    id: PropTypes.string.isRequired,
    className: PropTypes.string,
    deleteClick: PropTypes.func.isRequired,
};

export default ActionsButtons;
