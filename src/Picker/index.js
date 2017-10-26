import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Box from './Box';
import Trigger from './Trigger';
import Options from './Options';

class Picker extends Component {
    static propTypes = {
        options: PropTypes.shape({
            [PropTypes.string]: PropTypes.string,
        }).isRequired,
        onSelect: PropTypes.func.isRequired,
        default: PropTypes.string.isRequired,
    }

    state = {
        isOpen: false,
    }

    render() {
        return (
            <Box>
                <Trigger onClick={this.onClick} active={this.state.isOpen}>
                    {this.props.options[this.props.default]}
                </Trigger>
                <Options
                    visible={this.state.isOpen}
                    items={this.props.options}
                    onSelect={this.onSelect}
                />
            </Box>
        );
    }

    onSelect = (event, key) => {
        this.onClick(event);
        this.props.onSelect(key);
    }

    onClick = (event) => {
        event.preventDefault();

        this.toggleOpen();
    }

    toggleOpen() {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen,
        }));
    }
}

export default Picker;
