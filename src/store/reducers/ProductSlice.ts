import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../models/IProduct";
import data from "../../store/store-data";
import { Sort } from "../../models/ISort";
interface ProductState {
  products: IProduct[];
}

export const initialState: ProductState = {
  products: data,
};

export const ProductSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    sort(state, action: PayloadAction<Sort>) {
      switch (action.payload) {
        case Sort.cheap:
          state.products.sort((a, b) => a.price - b.price);
          break;
        case Sort.expensive:
          state.products.sort((a, b) => b.price - a.price);
          break;
        default:
          state.products.sort((a, b) => a.id - b.id);
      }
    },
  },
});

export default ProductSlice.reducer;
