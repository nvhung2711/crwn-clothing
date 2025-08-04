import type { CartItem } from '../../store/cart/cart.types';
import { CartItemContainer, ItemDetails, Name, Img } from './cart-item.style';

const CartItem = ({ cartItem }: { cartItem: CartItem }) => {
    const { name, imageUrl, quantity, price } = cartItem;
    return (
        <CartItemContainer>
            <Img src={imageUrl} alt={`${name}`} />
            <ItemDetails>
                <Name>{name}</Name>
                <span className="price">
                    {quantity} x ${price}
                </span>
            </ItemDetails>
        </CartItemContainer>
    );
};

export default CartItem;
