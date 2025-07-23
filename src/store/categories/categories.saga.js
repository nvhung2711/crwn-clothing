import { takeLatest, all, call, put } from 'redux-saga/effects';

import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import { fetchCategoriesStart, fetchCategoriesSuccess, fetchCategoriesFailed } from './categories.reducer';

// import { CATEGORIES_ACTION_TYPES } from './categories.types';

export function* fetchCategoriesAsync() {
    try {
        const categoriesArray = yield call(getCategoriesAndDocuments, 'categories');
        yield put(fetchCategoriesSuccess(categoriesArray));
    } catch(err) {
        yield put(fetchCategoriesFailed(err));
    }
}

export function* onFetchCategories() {
    yield takeLatest(fetchCategoriesStart.type, fetchCategoriesAsync);
}

export function* categoriesSaga() {
    yield all([call(onFetchCategories)]);
}