import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = ({
    locale, setLocale, className, children,
}) => (
    <button className={className} onClick={onClick(locale, setLocale)}>
        {children}
    </button>
);

Button.propTypes = {
    locale: PropTypes.string.isRequired,
    setLocale: PropTypes.func.isRequired,
};

function onClick(locale, setLocale) {
    return (event) => {
        event.preventDefault();

        setLocale(locale === 'de' ? 'en' : 'de');
    };
}

export default styled(Button)`
    background-color: rgb(0, 124, 187);
    border: 0;
    color: #fff;
    cursor: pointer;
    font-family: monospace;
    outline: none;
    padding: 0.5rem;
`;
