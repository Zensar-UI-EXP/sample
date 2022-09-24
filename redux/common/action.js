
export const START_NOTIFY_ME_FETCH = "START_NOTIFY_ME_FETCH";
export const END_NOTIFY_ME_FETCH = "END_NOTIFY_ME_FETCH";
export const RESET_NOTIFY_ME_FETCH = "RESET_NOTIFY_ME_FETCH";
export const TOGGLE_SETTINGS = "TOGGLE_SETTINGS";
export const SHOW_PREVIEW = 'SHOW_PREVIEW';
export const HIDE_PREVIEW = 'HIDE_PREVIEW';
export const OPEN_SNACK_BAR = 'OPEN_SNACK_BAR';
export const CLOSE_SNACK_BAR = 'CLOSE_SNACK_BAR';
export const TOGGLE_USERPROFILE = "TOGGLE_USERPROFILE";
export const TOGGLE_HELP = "TOGGLE_HELP";

function startNotifyMeFetch() {
    return {
        type:START_NOTIFY_ME_FETCH,
        payload:{}
    };
}

function endNotifyMeFetch(){
    return {
        type:END_NOTIFY_ME_FETCH,
        payload:{}
    };
}

export function showPreview(payload) {
    return {
        type:SHOW_PREVIEW,
        payload:payload
    };
}

export function hidePreview(){
    return {
        type:HIDE_PREVIEW,
        payload:{
        }
    };
}

export function resetNotifyMeFetch(){
    return {
        type:RESET_NOTIFY_ME_FETCH,
        payload:null
    };
}

export function toggleSettings() {
    return {
        type: TOGGLE_SETTINGS,
    };
}

export function openSnackBar(payload = {}) {
    return {
        type: OPEN_SNACK_BAR,
        payload:payload
    };
}

export function closeSnackBar(payload = {}) {
    return {
        type: CLOSE_SNACK_BAR,
        payload: payload
    }
}

export function toggleUserProfile() {
    return {
        type: TOGGLE_USERPROFILE,
    };
}

export function toggleHelp() {
    return {
        type: TOGGLE_HELP,
    };
}