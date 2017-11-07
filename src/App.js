import React, { Component } from 'react';
import { connect } from 'react-redux';

import defaultMessages from './Translations/defaultMessages';

import Title from './Components/Title';
import Button from './Components/Button';
import Select from './Components/Select';

import setLanguage from './Store/actions';

class languagePicker extends Component {
    constructor(props) {
        super(props);

        this.onButtonClick = this.onButtonClick.bind(this);
        this.onSelect = this.onSelect.bind(this);
    };

    onButtonClick() {
        const { language, dispatch } = this.props;

        language === 'en' ? dispatch(setLanguage('de')) : dispatch(setLanguage('en'));
    };

    onSelect(event) {
        const { dispatch } = this.props;

        event.target.value === 'de' ? dispatch(setLanguage('de')) : dispatch(setLanguage('en'));
    }

    render() {
        const language = this.props.language;
        const defaultMessage = defaultMessages[language];

        return (
            <section>
                <Title>{defaultMessage.title}</Title>
                <Button onClick={this.onButtonClick}>{defaultMessage.toggler}</Button>
                <Select value={language} onChange={this.onSelect}>
                    <option value="en">{defaultMessage.english}</option>
                    <option value="de">{defaultMessage.german}</option>
                </Select>
            </section>
        )
    };
};

export default connect((state => {
    return {
        language: state.language
    }
}))(languagePicker);
