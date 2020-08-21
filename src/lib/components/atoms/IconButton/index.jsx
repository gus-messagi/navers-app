import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Base = styled.button`
    height: 24px;
    width: 24px;
    background: none;
    border: none;
    
    img {
        cursor: pointer;
        object-fit: cover;
    }
`;

function IconButton({ src, alt, onClick }) {
    return (
        <Base onClick={onClick}>
            <img src={src} alt={alt} />
        </Base>
    );
}

IconButton.defaultProps = {
    alt: '',
    onClick: () => {},
};

IconButton.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    onClick: PropTypes.func,
};

export default IconButton;
