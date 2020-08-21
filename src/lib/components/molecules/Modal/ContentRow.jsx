import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ContentRowBase = styled.div`
    display: flex;
    flex-direction: row;
    max-width: 1080px;


    @media screen and (max-width: 800px) {
        flex-direction: column;
    }
`;

function ContentRow({ children }) {
    return (
        <ContentRowBase>
            { children }
        </ContentRowBase>
    );
}

ContentRow.propTypes = {
    children: PropTypes.array.isRequired,
};

export default ContentRow;
