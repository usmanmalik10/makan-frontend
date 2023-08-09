import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import realestateService from "./realestateService";



export const createrealestate = createAsyncThunk(
  'realestate/createrealestate',
  async (propertydescription, token, { rejectWithValue }) => {
    try {
      // Call API to subscribe user
      const response = await realestateService.createrealestate(propertydescription, token);
      console.log({ response })
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

export const showrealestate = createAsyncThunk(
  'realestate/showrealestate',
  async (_, { rejectWithValue }) => {
    try {
      // Call API to install user
      const response = await realestateService.showrealestate();
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

export const getrealestate = createAsyncThunk(
  'realestate/getrealestate',
  async (_, { rejectWithValue }) => {
    try {
      // Call API to install user

      const response = await realestateService.getrealestate();
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

export const updaterealestate = createAsyncThunk(
  'realestate/updaterealestate',
  async (_, { rejectWithValue }) => {
    try {
      // Call API to install user
      const response = await realestateService.updaterealestate();
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

export const deleterealestate = createAsyncThunk(
  'realestate/deleterealestate',
  async (_, { rejectWithValue }) => {
    try {
      // Call API to install user
      const response = await realestateService.deleterealestate();
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


export const realestateSlice = createSlice({
  name: "realestate",
  initialState: {
    isLoading: false,
    isError: null,
    message: "",
  },
 
  extraReducers: (builder) => {
    builder
      .addCase(createrealestate.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createrealestate.fulfilled, (state, action) => {
        console.log({ action })
        state.isLoading = false;
        state.isSuccess = true;
        state.message = 'Pending orders fetched successfully';
        state.createrealestate = action.payload;
      })
      .addCase(createrealestate.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.error.message;
        state.createrealestate = null
      })
      .addCase(showrealestate.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(showrealestate.fulfilled, (state, action) => {
        console.log({ action })
        state.isLoading = false;
        state.isSuccess = true;
        state.showrealestate = action.payload;
      })
      .addCase(showrealestate.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.showrealestate = null
      })
      .addCase(getrealestate.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getrealestate.fulfilled, (state, action) => {
        console.log({ action })
        state.isLoading = false;
        state.isSuccess = true;
        state.getrealestate = action.payload;
      })
      .addCase(getrealestate.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.getrealestate = null
      })
      .addCase(updaterealestate.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updaterealestate.fulfilled, (state, action) => {
        console.log({ action })
        state.isLoading = false;
        state.isSuccess = true;
        state.updaterealestate = action.payload;
      })
      .addCase(updaterealestate.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.updaterealestate = null
      })
      .addCase(deleterealestate.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleterealestate.fulfilled, (state, action) => {
        console.log({ action })
        state.isLoading = false;
        state.isSuccess = true;
        state.deleterealestate = action.payload;
      })
      .addCase(deleterealestate.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.deleterealestate = null
      });
  },
});

// export const { setPendingOrders, setCompletedOrders, setOrderStatus, setGetCount } = adminSlice.actions;

export default realestateSlice.reducer;
