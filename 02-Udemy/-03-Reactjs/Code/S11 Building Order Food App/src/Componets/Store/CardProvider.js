import { useReducer } from 'react';

import CartContext from './cart-context';

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const exitingCardIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existingItemCard = state.items[exitingCardIndex];
    let updatedItems;
    if (existingItemCard) {
      const updatedItem = {
        ...existingItemCard,
        amount: existingItemCard.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[exitingCardIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === 'REMOVE') {
    const extitingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const exitingCartItem = state.items[extitingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - exitingCartItem.price;
    let updatedItems;
    if (exitingCartItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = {
        ...exitingCartItem,
        amount: exitingCartItem.amount - 1,
      };
      updatedItems = [...state.items];
      updatedItems[extitingCartItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: 'ADD', item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: 'REMOVE', id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
