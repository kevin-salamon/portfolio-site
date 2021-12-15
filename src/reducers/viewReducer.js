/* eslint-disable import/no-anonymous-default-export */
import {
    SET_SCROLL,
    SET_SHOW_SIDEBAR
} from '../constants/actionTypes';

const initialState = {
    scroll: 0,
    showSidebar: true
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_SCROLL:
            return {
                ...state,
                scroll: action.payload
            };
        case SET_SHOW_SIDEBAR:
            return {
                ...state,
                showSidebar: action.payload
            };
        default:
            return state;
    }
};