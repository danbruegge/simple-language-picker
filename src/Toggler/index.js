import { connect } from 'react-redux';

import Button from './Button';
import { setLocale } from '../Translations/ducks';

const mapStateToProps = ({ translations }) => ({
    locale: translations.locale,
});
const mapDispatchToProps = { setLocale };
export default connect(mapStateToProps, mapDispatchToProps)(Button);
