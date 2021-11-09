import { 
    SET_SCROLL,
} from '../constants/actionTypes';

export function setScroll(value) {
    return dispatch => {
        return dispatch({
            type: SET_SCROLL,
            payload: value
        })
    }
};
