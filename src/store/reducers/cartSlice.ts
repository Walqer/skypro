import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../models/IProduct";
import { RootState } from "../store";

export interface ICartItem extends IProduct {
  count: number;
}
interface CartState {
  cart: ICartItem[];
}
const savedCartJSON = localStorage.getItem("cart");
const savedCart: ICartItem[] = savedCartJSON ? JSON.parse(savedCartJSON) : [];

export const initialState: CartState = {
  cart: savedCart,
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action: PayloadAction<ICartItem>) {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );
      existingItem ? existingItem.count++ : state.cart.push(action.payload);
      alert("Добавлено в корзину");
    },
    remove(state, action: PayloadAction<number>) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    increment(state, action: PayloadAction<number>) {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload) {
          item.count++;
        }
        return item;
      });
    },
    decrement(state, action: PayloadAction<number>) {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload) {
          item.count--;
        }
        return item;
      });
    },
    clear(state) {
      state.cart = [];
    },
  },
});

export default CartSlice.reducer;

const cartItems = (state: RootState) => state.cartReducer.cart;

export const total = createSelector([cartItems], (cartItems) => {
  localStorage.setItem("cart", JSON.stringify(cartItems));
  if (cartItems.length) {
    return cartItems.reduce((acc, item) => {
      return (acc += item.price * item.count);
    }, 0);
  }
  return 0;
});
