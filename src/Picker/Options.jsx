import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Option from './Option';

const Options = ({
    className,
    visible,
    items,
    onSelect,
}) => visible && (
    <div className={className}>
        {Object.keys(items).map(key => (
            <Option key={key} onClick={event => onSelect(event, key)}>
                {items[key]}
            </Option>
        ))}
    </div>
);

Options.propTypes = {
    items: PropTypes.shape({
        [PropTypes.string]: PropTypes.string,
    }).isRequired,
};

export default styled(Options)`
    box-shadow: 0 5px 5px 0 #ccc;
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 15%;
`;
