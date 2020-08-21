import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Text = styled.h1`
    font-weight: 600;
    font-size: 2.4rem;  
`;

function Title({ children }) {
    return (
        <Text className="modal-title">{ children }</Text>
    );
}

Title.propTypes = {
    children: PropTypes.string.isRequired,
};

export default Title;
