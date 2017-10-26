import { connect } from 'react-redux';

import Picker from './Picker';
import { setLocale } from './Translations/ducks';

const mapStateToProps = ({ translations }) => ({
    default: translations.locale,
});
const mapDispatchToProp = { onSelect: setLocale };
export default connect(mapStateToProps, mapDispatchToProp)(Picker);
