import { AnyAction } from 'redux';
import { UserData } from '../../utils/firebase/firebase.utils';
import {
    signInSuccess,
    signOutSuccess,
    signOutFailed,
    signUpFailed,
    signInFailed,
} from './user.action';

export type UserState = {
    readonly currentUser: UserData | null;
    readonly error: Error | null;
};

const INITIAL_STATE: UserState = {
    currentUser: null,
    error: null,
};

export const userReducer = (state = INITIAL_STATE, action: AnyAction) => {
    if (signInSuccess.match(action)) {
        return { ...state, currentUser: action.payload, error: null };
    } else if (signOutSuccess.match(action)) {
        return { ...state, currentUser: null, error: null };
    } else if (
        signInFailed.match(action) ||
        signOutFailed.match(action) ||
        signUpFailed.match(action)
    ) {
        return { ...state, currentUser: null, error: action.payload };
    } else {
        return state;
    }

    // switch (type) {
    //     case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
    //         return { ...state, currentUser: payload };
    //     case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
    //         return { ...state, currentUser: null };
    //     case USER_ACTION_TYPES.SIGN_OUT_FAILED:
    //     case USER_ACTION_TYPES.SIGN_UP_FAILED:
    //     case USER_ACTION_TYPES.SIGN_IN_FAILED:
    //         return { ...state, error: payload };
    //     default:
    //         return state;
    // }
};
