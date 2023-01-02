import { FC, memo } from "react";

import { useSelector, useDispatch } from "react-redux";

import {
  CheckoutItemContainer,
  ImageContainer,
  ProductName,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
  Price,
} from "./checkout-item.styles";

import { selectCartItems } from "../../store/cart/cart.selector";

import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart,
} from "../../store/cart/cart.action";

import { CartItem } from "../../store/cart/cart.types";

type CartItemProps = {
  cartItem: CartItem;
};

const CheckoutItem: FC<CartItemProps> = memo(({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const clearItemHandler = () =>
    dispatch(clearItemFromCart(cartItems, cartItem));
  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
  const removeItemHandler = () =>
    dispatch(removeItemFromCart(cartItems, cartItem));

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <ProductName> {name} </ProductName>
      <Quantity>
        <Arrow onClick={removeItemHandler}>−</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>+</Arrow>
      </Quantity>

      <Price>${price * quantity}.00 AUD</Price>
      <RemoveButton onClick={clearItemHandler}>REMOVE</RemoveButton>
    </CheckoutItemContainer>
  );
});

export default CheckoutItem;
