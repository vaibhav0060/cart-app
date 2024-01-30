import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
    },
    reducers: {
        add(state, action) {
            const existingProductIndex = state.cart.findIndex((item) => item.product.id === action.payload.product.id);
            if (existingProductIndex !== -1) {

               
                state.cart[existingProductIndex].quantity += 1;

            } else {
               state.cart.push({product:action.payload.product,quantity:1})
            }
            return state;

        },
        remove(state, action) {
            const productIdToRemove = action.payload.product.id;
            console.log(productIdToRemove)
            const existingProductIndex = state.cart.findIndex((item) =>
            item.product.id === productIdToRemove);
            if (existingProductIndex !== -1) {
                // if the product has quantity more than 1 decreased the qty by one . 
                if(state.cart[existingProductIndex].quantity>1){


                    state.cart[existingProductIndex].quantity -= 1;
                }
            else {
               state.cart.splice(existingProductIndex , 1); 
            }}
            return state;
        }
    }
})
export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;