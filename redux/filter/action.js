
export const TOGGLE_FILTER     =   "TOGGLE_FILTER";
export const SET_ACTIVE = 'SET_ACTIVE';

export function toggleFilter() {
    return {
        type: TOGGLE_FILTER,
    };
}

export function setActive(payload) {
    return {
        type: SET_ACTIVE,
        payload: payload
    };
}


