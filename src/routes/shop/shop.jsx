import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import CategoriesPreview from '../categories-preview/categories-preview';
import Category from '../category/category';
import { fetchCategoriesStart } from '../../store/categories/categories.action';

import './shop.style.scss';

const Shop = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategoriesStart());
    }, []);

    return (
        <Routes>
            <Route index element={<CategoriesPreview />}/>
            <Route path=":category" element={<Category />}/>
        </Routes>
    )
}

export default Shop;