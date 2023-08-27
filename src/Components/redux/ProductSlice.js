import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
    products: [],
    single: {},
    cart: [],
    cartTotal: 0,
    cartItemQuantity: 0,
    isLoading: false,
};
const URL = 'https://dummyjson.com/products';
// get products
export const getProduct = createAsyncThunk("product/getproduct", async() => {
    try {
        const response = await axios(URL);
        console.log('response: ', response);
        return response.data.products;
    } catch (error) {
        console.log("something wrong");
    }
});

const ProductSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        ShowProduct: (state, action) => {
            console.log('action: ', action);

            const Sproduct = [...state.products]
            const singleProduct = Sproduct.find(
                (prod) => prod.id === Number(action.payload.id)
            );
            console.log("Sproduct: ", singleProduct);
            state.single = singleProduct
        },
        AddToCart: (state, action) => {

            const ItemIndex = state.cart.findIndex((item) => item.id === action.payload.id)
            if (ItemIndex >= 0) {
                state.cart[ItemIndex].cartQuantity += 1
            } else {

                const tempProducts = {...action.payload, cartQuantity: 1 }
                state.cart.push(tempProducts)
            }
        },
        RemoveCartItem: (state, action) => {
            const newCartItems = state.cart.filter((item) => {
                return item.id !== action.payload.id
            })

            state.cart = newCartItems
        },
        decreaseCartItem: (state, action) => {
            const ItemIndex = state.cart.findIndex((item) => {
                return item.id === action.payload
            })
            if (state.cart[ItemIndex].cartQuantity > 1) {
                state.cart[ItemIndex].cartQuantity -= 1
            } else if (state.cart[ItemIndex].cartQuantity <= 1) {
                const newCartItems = state.cart.filter((item) => {
                    return item.id !== action.payload
                })

                state.cart = newCartItems
            }
        },
        getTotal: (state, action) => {
            let { total, quantity } = state.cart.reduce((cartTotal, cartItem) => {

                const { price, cartQuantity } = cartItem
                const itemTotal = price * cartQuantity
                cartTotal.total += itemTotal
                cartTotal.quantity += cartQuantity
                return cartTotal
            }, { total: 0, quantity: 0 })
            console.log('quantity: ', quantity);
            console.log('total: ', total);
            state.cartTotal = total
            state.cartItemQuantity = quantity
        }

    },

    extraReducers: {
        [getProduct.pending]: (state, action) => {
            state.isLoading = true;
        },
        [getProduct.fulfilled]: (state, action) => {
            state.products = action.payload;
            state.isLoading = false;
        },
    },
});

export const { ShowProduct, AddToCart, RemoveCartItem, decreaseCartItem, getTotal } = ProductSlice.actions;

export default ProductSlice.reducer;