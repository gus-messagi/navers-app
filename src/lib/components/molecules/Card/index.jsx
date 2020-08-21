import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import api from '../../../services/api';
import ActionsButtons from '../ActionsButtons';
import DeleteSuccessModal from '../DeleteSuccessModal';
import DeleteModal from '../DeleteModal';

const CardBase = styled.div`
    height: 100%;
    width: 100%;
`;

const CardClickable = styled.div`
    cursor: pointer;
`;

const CardImage = styled.img`
    width: 100%;
    height: 280px;
    object-fit: cover;
`;

const Info = styled.div`
    margin: 1.6rem 0;
`;

const Name = styled.span`
    font-weight: 600;
`;

const Role = styled.p`
    margin-top: 0.4rem;
    line-height: 2.4rem;
`;

function Card({
    name,
    role,
    src,
    alt,
    id,
    onClick,
    setLoading,
}) {
    const [displayDeleteSuccessfully, setDisplayDeleteSuccessfully] = useState(false);
    const [displayDeleteModal, setDisplayDeleteModal] = useState(false);

    function handleDeleteClick() {
        api.delete(`/navers/${id}`).then(() => {
            setDisplayDeleteModal(false);
            setDisplayDeleteSuccessfully(true);
        });
    }

    function handleCloseSuccessModal() {
        setLoading(true);
        setDisplayDeleteSuccessfully(false);
    }

    return (
        <CardBase>
            <CardClickable onClick={onClick}>
                <CardImage src={src} alt={alt} />
                <Info>
                    <Name>{name}</Name>
                    <Role>{role}</Role>
                </Info>
            </CardClickable>
            <ActionsButtons
                id={id}
                deleteClick={() => setDisplayDeleteModal(true)}
            />
            {displayDeleteModal && (
                <DeleteModal
                    cancelClick={() => setDisplayDeleteModal(false)}
                    deleteClick={handleDeleteClick}
                />
            )}
            {displayDeleteSuccessfully && (
                <DeleteSuccessModal onClick={handleCloseSuccessModal} />
            )}
        </CardBase>
    );
}

Card.defaultProps = {
    name: '',
    role: '',
    src: '',
    alt: '',
    id: '',
    onClick: () => {},
};

Card.propTypes = {
    name: PropTypes.string,
    role: PropTypes.string,
    src: PropTypes.string,
    alt: PropTypes.string,
    id: PropTypes.string,
    onClick: PropTypes.func,
    setLoading: PropTypes.func.isRequired,
};

export default Card;
