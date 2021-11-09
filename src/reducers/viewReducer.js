/* eslint-disable import/no-anonymous-default-export */
import {
    SET_SCROLL,
} from '../constants/actionTypes';

const initialState = {
    scroll: 0
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_SCROLL:
            return {
                ...state,
                scroll: action.payload
            };
        default:
            return state;
    }
};