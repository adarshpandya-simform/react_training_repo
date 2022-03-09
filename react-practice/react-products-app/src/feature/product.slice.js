import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getProductsRequest,
  addProductRequest,
  deleteProductRequest,
  updateProductRequest,
} from "../api/products.api";

let initialState = { products: [], isLoading: false };

export const fetchProductsAsync = createAsyncThunk(
  "products/fetchTodo",
  async (_, { rejectWithValue }) => {
    try {
      const todos = await getProductsRequest();
      return todos;
    } catch (error) {
      return rejectWithValue([]);
    }
  }
);

export const addProductAsync = createAsyncThunk(
  "products/add-product",
  async ({ name, description, thumbnail, images }, { rejectWithValue }) => {
    try {
      const product = await addProductRequest({
        name,
        description,
        thumbnail,
        images,
      });
      return product;
    } catch (error) {
      return rejectWithValue({});
    }
  }
);

export const deleteProductAsync = createAsyncThunk(
  "products/delete-product",
  async ({ id }, { rejectWithValue }) => {
    try {
      const product = await deleteProductRequest({ id });
      return product;
    } catch (error) {
      rejectWithValue({});
    }
  }
);

export const updateProductAsync = createAsyncThunk(
  "products/update-product",
  async ({ id, name, description, thumbnail, images }, { rejectWithValue }) => {
    try {
      const product = await updateProductRequest({
        description,
        id,
        images,
        name,
        thumbnail,
      });
      return product;
    } catch (error) {
      rejectWithValue({});
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProductsAsync.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.products = payload;
    });
    builder.addCase(fetchProductsAsync.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProductsAsync.rejected, (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    });
    builder.addCase(addProductAsync.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.products.push(payload);
    });
    builder.addCase(addProductAsync.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(addProductAsync.rejected, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(deleteProductAsync.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.products = state.products.filter(
        (product) => product._id !== payload._id
      );
    });
    builder.addCase(deleteProductAsync.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(deleteProductAsync.rejected, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(updateProductAsync.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.products = state.products.map((product) => {
        if (product._id === payload._id) {
          product.name = payload.name;
          product.description = payload.description;
          product.images = payload.images;
          product.thumbnail = payload.thumbnail;
        }
        return product;
      });
    });
    builder.addCase(updateProductAsync.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(updateProductAsync.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export const { reducer } = productSlice;
export const { setLoading } = productSlice.actions;
