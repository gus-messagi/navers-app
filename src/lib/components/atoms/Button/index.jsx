import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Base = styled.button.attrs(({ className }) => ({
    className,
}))`
    padding: 1.4rem 1rem;
    font: 600 1.6rem Montserrat;
    border: none;
    min-width: 176px;
    cursor: pointer;

    &.filled {
        background: ${({ theme }) => theme.primary};
        color: ${({ theme }) => theme.secondary};
    }

    &.outlined {
        color: ${({ theme }) => theme.primary};
        background: none;
        border: 1px solid ${({ theme }) => theme.primary};
    }

    &.text {
        padding: 0;
        width: auto;
        min-width: 0;
        background: none;
    }
`;

function Button({
    children,
    className,
    variant,
    onClick,
}) {
    return (
        <Base
            className={[className, variant]}
            onClick={onClick}
        >
            { children }
        </Base>
    );
}

Button.defaultProps = {
    className: '',
    variant: 'filled',
    onClick: () => {},
};

Button.propTypes = {
    children: PropTypes.string.isRequired,
    className: PropTypes.string,
    variant: PropTypes.string,
    onClick: PropTypes.func,
};

export default Button;
