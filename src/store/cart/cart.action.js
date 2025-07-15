import { CART_ACTION_TYPES } from "./cart.types";

export const setIsCartOpen = (boolean) => ({ type: CART_ACTION_TYPES.SET_IS_CART_OPEN, payload: boolean });

const addCartItem = (cartItems, productToAdd) => {
    //find if cartItems contains productToAdd
    const existingCartItem = cartItems.find(cartItem => cartItem.id === productToAdd.id);

    //if found, increment the quantity
    if(existingCartItem) {
        return cartItems.map(cartItem => 
            cartItem.id === productToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
    }

    //return new array with modified cartItems/ new cart item
    return [...cartItems, {...productToAdd, quantity: 1}];
}

const removeCartItem = (cartItems, cartItemToRemove) => {
    //find the cart item to remove
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id);

    //check if quantity is 1, if it is then remove that item from cart
    if(existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    }

    //return back cart items with matching cart item with reduced quantity
    return cartItems.map(cartItem => 
        cartItem.id === cartItemToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
    );
}

const clearCartItem = (cartItems, cartItemToClear) => {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id);
}

export const addItemToCart = (cartItems, productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    return ({ type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: newCartItems });
}

export const removeItemFromCart = (cartItems, productToRemove) => {
    const newCartItems = removeCartItem(cartItems, productToRemove);
    return ({ type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: newCartItems });
}

export const clearItemFromCart = (cartItems, productToClear) => {
    const newCartItems = clearCartItem(cartItems, productToClear);
    return ({ type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: newCartItems });
}