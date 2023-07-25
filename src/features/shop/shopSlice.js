import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import shopService from "./shopService";



export const createshop = createAsyncThunk(
  'shop/createshop',
  async (_, { rejectWithValue }) => {
    try {
      // Call API to subscribe user
      const response = await shopService.createshop();
      console.log({ response })
      return response;
    } catch (error) {
      console.log({ error });
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log({ message });
      return rejectWithValue(message);

    }
  }
);

export const showshop = createAsyncThunk(
  'shop/showshop',
  async (_, { rejectWithValue }) => {
    try {
      // Call API to install user
      const response = await shopService.showshop();
      return response;
    } catch (error) {
      console.log({ error });
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log({ message });
      return rejectWithValue(message);
    }
  }
);

export const getshop = createAsyncThunk(
  'shop/getshop',
  async (statusData, { rejectWithValue }) => {
    try {
      // Call API to install user

      const response = await shopService.getshop(statusData);
      window.location.reload();
      return response.data;
    } catch (error) {
      console.log({ error });
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log({ message });
      return rejectWithValue(message);
    }
  }
);

export const updateshop = createAsyncThunk(
  'shop/updateshop',
  async (countData, { rejectWithValue }) => {
    try {
      // Call API to install user
      const response = await shopService.updateshop(countData);
      return response;
    } catch (error) {
      console.log({ error });
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log({ message });
      return rejectWithValue(message);
    }
  }
);

export const deleteshop = createAsyncThunk(
  'shop/deleteshop',
  async (countData, { rejectWithValue }) => {
    try {
      // Call API to install user
      const response = await shopService.deleteshop(countData);
      return response;
    } catch (error) {
      console.log({ error });
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log({ message });
      return rejectWithValue(message);
    }
  }
);


export const shopSlice = createSlice({
  name: "shop",
  initialState: {
    isLoading: false,
    isError: null,
    message: "",
  },
 
  extraReducers: (builder) => {
    builder
      .addCase(createshop.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createshop.fulfilled, (state, action) => {
        console.log({ action })
        state.isLoading = false;
        state.isSuccess = true;
        state.message = 'Pending orders fetched successfully';
        state.createshop = action.payload;
      })
      .addCase(createshop.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.error.message;
        state.createshop = null
      })
      .addCase(showshop.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(showshop.fulfilled, (state, action) => {
        console.log({ action })
        state.isLoading = false;
        state.isSuccess = true;
        state.showshop = action.payload;
      })
      .addCase(showshop.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.showshop = null
      })
      .addCase(getshop.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getshop.fulfilled, (state, action) => {
        console.log({ action })
        state.isLoading = false;
        state.isSuccess = true;
        state.getshop = action.payload;
      })
      .addCase(getshop.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.getshop = null
      })
      .addCase(updateshop.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateshop.fulfilled, (state, action) => {
        console.log({ action })
        state.isLoading = false;
        state.isSuccess = true;
        state.updateshop = action.payload;
      })
      .addCase(updateshop.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.updateshop = null
      })
      .addCase(deleteshop.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteshop.fulfilled, (state, action) => {
        console.log({ action })
        state.isLoading = false;
        state.isSuccess = true;
        state.deleteshop = action.payload;
      })
      .addCase(deleteshop.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.deleteshop = null
      });
  },
});

// export const { setPendingOrders, setCompletedOrders, setOrderStatus, setGetCount } = adminSlice.actions;

export default shopSlice.reducer;
