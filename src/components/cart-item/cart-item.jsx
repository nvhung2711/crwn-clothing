import { CartItemContainer, ItemDetails, Name, Img } from './cart-item.style';

const CartItem = ({ cartItem }) => {
    const { name, imageUrl, quantity, price } = cartItem;
    return(
        <CartItemContainer>
            <Img src={imageUrl} alt={`${name}`}/>
            <ItemDetails>
                <Name>{name}</Name>
                <span className='price'>{quantity} x ${price}</span>
            </ItemDetails>
        </CartItemContainer>
    )
}

export default CartItem;