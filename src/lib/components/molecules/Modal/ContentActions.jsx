import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ContentActionsBase = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 1.6rem;

    button + button {
        margin-left: 2.4rem;
    }

    @media screen and (max-width: 500px) {
        justify-content: center;
        flex-direction: column;

        button + button {
            margin-left: 0;
            margin-top: 1.6rem;
        }
    }
`;

function ContentActions({ children }) {
    return (
        <ContentActionsBase>
            { children }
        </ContentActionsBase>
    );
}

ContentActions.propTypes = {
    children: PropTypes.array.isRequired,
};

export default ContentActions;
