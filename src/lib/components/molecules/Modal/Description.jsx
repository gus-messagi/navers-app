import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Text = styled.p`
    font-weight: 400;
    font-size: 1.6rem;  
    line-height: 3.6rem;
`;

function Description({ children }) {
    return (
        <Text className="modal-description">{ children }</Text>
    );
}

Description.propTypes = {
    children: PropTypes.string.isRequired,
};

export default Description;
