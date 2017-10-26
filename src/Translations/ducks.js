const DEFAULT_LOCALE = 'en';

const SET_LOCALE = 'translations/SET_LOCALE';

const initState = {
    locale: DEFAULT_LOCALE,
};

export default function reducer(state = initState, action) {
    switch (action.type) {
        case SET_LOCALE:
            return {
                ...state,
                locale: action.locale,
            };
        default:
            return state;
    }
}

export function setLocale(locale) {
    return {
        type: SET_LOCALE,
        locale,
    };
}
