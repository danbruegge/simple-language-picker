import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

export default function Message({ children, id, ...props }) {
    return (
        <FormattedMessage id={id} defaultMessage={id} {...props}>
            {children}
        </FormattedMessage>
    );
}

Message.propTypes = {
    id: PropTypes.string.isRequired,
};
