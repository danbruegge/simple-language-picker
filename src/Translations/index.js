import { connect } from 'react-redux';
import { addLocaleData, IntlProvider } from 'react-intl';
import deLocaleData from 'react-intl/locale-data/de';
import enLocaleData from 'react-intl/locale-data/en';

import defaultMessages from './defaultMessages';

addLocaleData([...deLocaleData, ...enLocaleData]);

const mapStateToProps = ({ translations }) => ({
    key: translations.locale,
    locale: translations.locale,
    messages: defaultMessages[translations.locale],
});
export default connect(mapStateToProps)(IntlProvider);
