import { createSlice } from "@reduxjs/toolkit";

const initialState = { cardProducts: [], currentColor: "", amount: 0 };

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        increase: (state, action) => {
            state.cardProducts.map((item) => {
                if (item.id === action.payload && item.quantity <= item.stock) {
                    item.quantity += 1;
                }
            });
        },
        decrease: (state, action) => {
            state.cardProducts.map((item) => {
                if (item.id === action.payload && item.quantity > 1) {
                    item.quantity -= 1;
                }
            });
        },
        addToCard: (state, action) => {
            const { product, color } = action.payload;
            const { id, name, price, images, quantity, stock } = product;
            const existingProduct = state.cardProducts.find(
                (item) => item.id === id && item.color === state.currentColor,
            );

            if (existingProduct) {
                if (existingProduct.quantity >= stock) {
                    existingProduct.quantity = stock;
                } else {
                    existingProduct.quantity += quantity;
                }
            } else {
                state.cardProducts.push({
                    id,
                    name,
                    price,
                    image: images[0].url,
                    quantity,
                    stock,
                    color,
                });
            }
        },
        removeProduct: (state, action) => {
            state.cardProducts = state.cardProducts.filter(
                (item) => item.id !== action.payload,
            );
        },
        clearCart: (state) => {
            state.cardProducts = [];
        },
        totalAmount: (state) => {
            let totalAm = state.cardProducts.map((item) => {
                let temp_am = 0;
                temp_am += item.quantity * item.price;
                return temp_am;
            });
            state.amount = totalAm;
        },
    },
});
export const {
    addToCard,
    increase,
    decrease,
    totalAmount,
    removeProduct,
    clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
