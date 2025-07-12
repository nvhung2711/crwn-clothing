import { useContext } from 'react';

import ShopIcon from '../../assets/shopping-bag.svg';

import { CartContext } from '../../contexts/cart.context';

import { CartIconContainer, ShoppingIcon, CartCount } from './cart-icon.style';

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

    const toggleIsCartOpen = () =>setIsCartOpen(!isCartOpen);

    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon src={ShopIcon} alt='cart icon' />
            <CartCount>{cartCount}</CartCount>
        </CartIconContainer>
    )
};

export default CartIcon;