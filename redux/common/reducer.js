
import {START_NOTIFY_ME_FETCH,END_NOTIFY_ME_FETCH,RESET_NOTIFY_ME_FETCH, TOGGLE_SETTINGS, SHOW_PREVIEW, HIDE_PREVIEW, OPEN_SNACK_BAR, CLOSE_SNACK_BAR, TOGGLE_USERPROFILE, TOGGLE_HELP} from "./action";

const initState   =  {
    notifyMeFetchInProgress: false,
    notifyMeFetchResponse: null,
    settingsOpen: false,
    userProfileOpen: false,
    preview: false,
    previewData: {},
    helpOpen: false,
    snackBarOption: {
        open: true,
        vertical: 'top',
        horizontal: 'center',
        message: 'One of your reports has been updated'
    }
}

export  function commonReducer(state=initState, action){
    switch(action.type){
        case SHOW_PREVIEW:
            return {
                ...state,
                preview: true,
                previewData: action.payload
            };

        case HIDE_PREVIEW:
            return {
                ...state,
                preview: false,
                previewData: {}
            };

        case START_NOTIFY_ME_FETCH:
            return {
                ...state,
                notifyMeFetchInProgress:true,
            };

        case END_NOTIFY_ME_FETCH:
            var response     =   action.payload?.success;
            let result = null;

            if(response != null){
                result = response
            }
            return {
                ...state,
                notifyMeFetchInProgress:false,
                notifyMeFetchResponse: result
            };

        case RESET_NOTIFY_ME_FETCH:
            return {
                ...state,
                notifyMeFetchInProgress:false,
                notifyMeFetchResponse: null
            };

        case TOGGLE_SETTINGS:
            return {
                ...state,
                userProfileOpen: false,
                settingsOpen: !state.settingsOpen,
            };
        case OPEN_SNACK_BAR:
            return {
                ...state,
                snackBarOption: {...action.snackBarOption, open: true},
            };
        case CLOSE_SNACK_BAR:
            return {
                ...state,
                snackBarOption: {...state.snackBarOption, open: false},
            };

        case TOGGLE_USERPROFILE:
            return {
                ...state,
                settingsOpen: false,
                userProfileOpen: !state.userProfileOpen,
            };

        case TOGGLE_HELP:
            return {
                ...state,
                settingsOpen: false,
                userProfileOpen: false,
                helpOpen: !state.helpOpen,
            };
    
        default:
            return state;
    }
}