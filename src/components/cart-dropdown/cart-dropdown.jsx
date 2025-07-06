import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../contexts/cart.context';

import { CartDropdownContainer, CartItems, EmptyMessage } from './cart-dropdown.style';

import Button from '../button/button';
import CartItem from '../cart-item/cart-item';

const CartDropDown = () => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();
    
    const goToCheckoutHandler = () => {
        navigate('/checkout');
    }

    return (
        <CartDropdownContainer>
            <CartItems>
                {cartItems.length ? (
                cartItems.map((cartItem) => (
                    <CartItem key={cartItem.id} cartItem={cartItem} />
                ))
                ) : (
                <EmptyMessage>Your cart is empty</EmptyMessage>
                )}
            </CartItems>
            <Button onClick={goToCheckoutHandler}>Checkout</Button>
        </CartDropdownContainer>
    )
}

export default CartDropDown;