import { useSelector, useDispatch } from 'react-redux';

import ShopIcon from '../../assets/shopping-bag.svg';
import { CartIconContainer, ShoppingIcon, CartCount } from './cart-icon.style';
import { selectCartCount, selectIsCartOpen } from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';

const CartIcon = () => {
    const dispatch = useDispatch();

    const isCartOpen = useSelector(selectIsCartOpen);
    const cartCount = useSelector(selectCartCount);

    const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon src={ShopIcon} alt='cart icon' />
            <CartCount>{cartCount}</CartCount>
        </CartIconContainer>
    )
};

export default CartIcon;