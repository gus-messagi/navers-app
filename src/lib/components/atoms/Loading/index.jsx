import React from 'react';
import LoadingSpin from 'react-loading-spin';
import styled from 'styled-components';

const Base = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

function Loading() {
    return (
        <Base>
            <LoadingSpin />
        </Base>
    );
}

export default Loading;
