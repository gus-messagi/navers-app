import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const InputBase = styled.input`
    padding: 1rem;
    border: 1px solid ${({ theme }) => theme.colorInputBorder};
    ::placeholder {
        color: ${({ theme }) => theme.colorInputPlaceholder}
    }
`;

const LabelBase = styled.label`
    font-weight: 600;
    font-size: 1.2rem;
    margin-bottom: .5rem;
`;

const DivBase = styled.div`
    display: flex;
    flex-direction: column;
`;

function Input({
    label,
    value,
    placeholder,
    id,
    onChange,
    type,
    className,
}) {
    return (
        <DivBase className={className}>
            <LabelBase forHtml={id}>{label}</LabelBase>
            <InputBase
                id={id}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </DivBase>
    );
}

Input.defaultProps = {
    className: '',
    onChange: () => {},
    type: 'text',
    value: '',
};

Input.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string,
    placeholder: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    className: PropTypes.string,
    onChange: PropTypes.func,
    type: PropTypes.string,
};

export default Input;
