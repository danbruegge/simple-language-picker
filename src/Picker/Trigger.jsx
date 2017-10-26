import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Trigger = ({ children, active, ...props }) => (
    <button {...props}>
        {children}
        &nbsp;
        {active ? '<' : '>'}
    </button>
);

Trigger.propTypes = {
    active: PropTypes.bool,
};

Trigger.defaultProps = {
    active: false,
};

export default styled(Trigger)`
    background-color: ${({ active }) => (
        active ? 'rgb(0, 124, 187)' : 'transparent'
    )};
    border: none;
    color: ${({ active }) => (active ? '#fff' : 'inherit')};
    cursor: pointer;
    font-family: monospace;
    margin: 0.5rem 0;
    outline: none;
    padding: 0.5rem;
`;
