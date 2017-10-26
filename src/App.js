import React from 'react';

import Title from './Title';
import LanguagePicker from './LanguagePicker';
import Toggler from './Toggler';
import LANGUAGES from './Translations/languages';
import Message from './Translations/Message';

export default () => (
    <section>
        <Title>
            <Message id="title" />
        </Title>
        <Toggler>
            <Message id="toggler" />
        </Toggler>
        <LanguagePicker options={LANGUAGES} />
    </section>
);
