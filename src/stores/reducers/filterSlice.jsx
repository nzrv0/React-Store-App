import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Products, SingleProduct } from "../../utils/constants";

const initialState = {
    productItems: null,
    OrginalproductItems: [],
    search: "",
    category: "All",
    company: "All",
    color: "All",
    price: 0,
    max_price: 0,
    shipping: false,
    productsLength: 0,
    sortArray: "lowest",
    isLoading: true,
    productId: "",
    singleProduct: null,
};

export const fetchProducts = createAsyncThunk(
    "product/fetchProducts",
    async () => {
        const response = await axios(Products);
        const products = response.data;
        return products;
    },
);

export const fetchSingleProduct = createAsyncThunk(
    "product/fetchSingleProduct",
    async (id) => {
        const response = await axios(`${SingleProduct}${id}`);
        const product = response.data;
        return product;
    },
);

export const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        SearchFilter: (state, action) => {
            state.search = action.payload;
        },
        FilterCategory: (state, action) => {
            state.category = action.payload;
        },
        FilterCompany: (state, action) => {
            state.company = action.payload;
        },
        FilterColor: (state, action) => {
            state.color = action.payload;
        },
        FilterPrice: (state, action) => {
            state.price = action.payload;
        },
        FilterShipping: (state, action) => {
            state.shipping = action.payload;
        },
        sortProducts: (state, action) => {
            let tempProducts = [...state.productItems];
            state.sortArray = action.payload;
            switch (state.sortArray) {
                case "lowest":
                    tempProducts = tempProducts.sort(
                        (a, b) => a.price - b.price,
                    );
                    break;
                case "highest":
                    tempProducts = tempProducts.sort(
                        (a, b) => b.price - a.price,
                    );
                    break;
                case "a-z":
                    tempProducts = tempProducts.sort((a, b) =>
                        a.name.toUpperCase() < b.name.toUpperCase() ? -1 : 1,
                    );
                    break;
                case "z-a":
                    tempProducts = tempProducts.sort((a, b) =>
                        a.name.toUpperCase() > b.name.toUpperCase() ? -1 : 1,
                    );
                    break;
                default:
                    tempProducts = tempProducts.sort(
                        (a, b) => a.price - b.price,
                    );
            }
            state.productItems = tempProducts;
        },
        filterProducts: (state) => {
            const { search, category, company, color, price, shipping } = state;
            let tempProducts = [...state.OrginalproductItems];
            if (search !== "") {
                tempProducts = tempProducts.filter((item) =>
                    item.name.startsWith(search.toLocaleLowerCase()),
                );
            }
            if (category !== "All") {
                tempProducts = tempProducts.filter(
                    (item) => item.category === category.toLowerCase(),
                );
            }
            if (company !== "All") {
                tempProducts = tempProducts.filter(
                    (item) => item.company === company,
                );
            }
            if (color !== "All") {
                tempProducts = tempProducts.filter((item) =>
                    item.colors.map((e) => e).includes(color),
                );
            }
            if (price !== "3099.99") {
                tempProducts = tempProducts.filter(
                    (item) => item.price.toString() <= price,
                );
            }
            if (shipping) {
                tempProducts = tempProducts.filter(
                    (item) => item.shipping === shipping,
                );
            }
            state.productItems = tempProducts;
        },
        clearFilters: (state) => {
            state.search = "";
            state.category = "All";
            state.company = "All";
            state.color = "All";
            state.price = state.max_price;
            state.shipping = false;
        },
        setProductId: (state, action) => {
            state.productId = action.payload;
        },
        increaseQuantity: (state) => {
            if (state.singleProduct.quantity <= state.singleProduct.stock) {
                state.singleProduct.quantity += 1;
            }
        },
        decreaseQuantity: (state) => {
            if (state.singleProduct.quantity > 1) {
                state.singleProduct.quantity -= 1;
            }
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.OrginalproductItems = action.payload;
                state.price = Math.max(
                    ...state.OrginalproductItems.map((item) => item.price),
                );
                state.productsLength = state.OrginalproductItems.length;
            })
            .addCase(fetchProducts.rejected, (state) => {
                state.isLoading = false;
            })
            .addCase(fetchSingleProduct.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchSingleProduct.fulfilled, (state, action) => {
                state.isLoading = false;
                state.singleProduct = action.payload;
                state.singleProduct.quantity = 1;
            })
            .addCase(fetchSingleProduct.rejected, (state) => {
                state.isLoading = false;
            });
    },
});

export const {
    SearchFilter,
    FilterCategory,
    FilterCompany,
    FilterShipping,
    FilterPrice,
    FilterColor,
    sortProducts,
    filterProducts,
    clearFilters,
    setProductId,
    increaseQuantity,
    decreaseQuantity,
} = filterSlice.actions;

export default filterSlice.reducer;
