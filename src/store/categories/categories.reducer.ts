// import { createSlice } from "@reduxjs/toolkit";
import { AnyAction } from 'redux';
import { Category } from './categories.types';
import {
    fetchCategoriesStart,
    fetchCategoriesSuccess,
    fetchCategoriesFailed,
} from './categories.action';

export type CategoriesState = {
    readonly categories: Category[];
    readonly isLoading: boolean;
    readonly error: Error | null;
};

export const CATEGORIES_INITIAL_STATE: CategoriesState = {
    categories: [],
    isLoading: false,
    error: null,
};

// export const categoriesSlice = createSlice({
//     name: "categories",
//     initialState: CATEGORIES_INITIAL_STATE,
//     reducers: {
//         fetchCategoriesStart(state, action) {
//             state.isLoading = true;
//         },

//         fetchCategoriesSuccess(state, action) {
//             state.isLoading = false;
//             state.categories = action.payload;
//             state.error = null;
//         },

//         fetchCategoriesFailed(state, action) {
//             state.isLoading = false;
//             state.error = action.payload;
//         }
//     },
// });

export const categoriesReducer = (
    state = CATEGORIES_INITIAL_STATE,
    action: AnyAction
): CategoriesState => {
    if (fetchCategoriesStart.match(action)) {
        return { ...state, isLoading: true };
    } else if (fetchCategoriesSuccess.match(action)) {
        return { ...state, categories: action.payload, isLoading: false };
    } else if (fetchCategoriesFailed.match(action)) {
        return { ...state, error: action.payload, isLoading: false };
    } else {
        return state;
    }

    // switch (action.type) {
    //     case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
    //         return { ...state, isLoading: true };
    //     case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
    //         return { ...state, categories: action.payload, isLoading: false };
    //     case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED:
    //         return { ...state, error: action.payload, isLoading: false };
    //     default:
    //         return state;
    // }
};

// export const categoriesReducer = categoriesSlice.reducer;

// export const { fetchCategoriesStart, fetchCategoriesSuccess, fetchCategoriesFailed } = categoriesSlice.actions;
