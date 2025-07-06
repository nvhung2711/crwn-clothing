import { useContext } from 'react';

import ShopIcon from '../../assets/shopping-bag.svg';

import { CartContext } from '../../contexts/cart.context';

import { CartIconContainer, ShoppingIcon, ItemCount } from './cart-icon.style';

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, itemCount } = useContext(CartContext);

    const toggleIsCartOpen = () =>setIsCartOpen(!isCartOpen);

    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon src={ShopIcon} alt='cart icon' />
            <ItemCount>{itemCount}</ItemCount>
        </CartIconContainer>
    )
};

export default CartIcon;