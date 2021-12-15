import { 
    SET_SCROLL,
    SET_SHOW_SIDEBAR
} from '../constants/actionTypes';

export function setScroll(value) {
    return dispatch => {
        return dispatch({
            type: SET_SCROLL,
            payload: value
        })
    }
};

export function setShowSidebar(bool) {
    return dispatch => {
        return dispatch({
            type: SET_SHOW_SIDEBAR,
            payload: bool
        })
    }
};
