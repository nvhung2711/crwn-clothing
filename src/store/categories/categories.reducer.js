import { createSlice } from "@reduxjs/toolkit";

// import { CATEGORIES_ACTION_TYPES } from "./categories.types";

export const CATEGORIES_INITIAL_STATE = {
    categories: [],
    isLoading: false,
    error: null,
};

export const categoriesSlice = createSlice({
    name: "categories",
    initialState: CATEGORIES_INITIAL_STATE,
    reducers: {
        fetchCategoriesStart(state, action) {
            state.isLoading = true;
        },
        
        fetchCategoriesSuccess(state, action) {
            state.isLoading = false;
            state.categories = action.payload;
            state.error = null;
        },

        fetchCategoriesFailed(state, action) {
            state.isLoading = false;
            state.error = action.payload;
        }
    },
});

// export const categoriesReducer = (state = CATEGORIES_INITIAL_STATE, action = {}) => {
//     const { type, payload } = action;

//     switch(type) {
//         case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
//             return { ...state, isLoading: true };
//         case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
//             return { ...state, categories: payload, isLoading: false };
//         case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED:
//             return { ...state, error: payload, isLoading: false };
//         default:
//             return state;
//     }
// }

export const categoriesReducer = categoriesSlice.reducer;

export const { fetchCategoriesStart, fetchCategoriesSuccess, fetchCategoriesFailed } = categoriesSlice.actions;