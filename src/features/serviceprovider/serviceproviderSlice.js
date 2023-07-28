import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import serviceproviderService from "./serviceproviderService";



export const createservice = createAsyncThunk(
  'serviceprovider/createservice',
  async (serviceData, { rejectWithValue }) => {
    try {
      // Call API to subscribe user
      const response = await serviceproviderService.createservice(serviceData);
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

export const showservice = createAsyncThunk(
  'serviceprovider/showservices',
  async (_, { rejectWithValue }) => {
    try {
      // Call API to install user
      const response = await serviceproviderService.showservice();
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

export const getservice = createAsyncThunk(
  'serviceprovider/getservice',
  async (_, { rejectWithValue }) => {
    try {
      // Call API to install user

      const response = await serviceproviderService.getservice();
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

export const updateservice = createAsyncThunk(
  'serviceprovider/updateservice',
  async (_, { rejectWithValue }) => {
    try {
      // Call API to install user
      const response = await serviceproviderService.updateservice();
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

export const deleteservice = createAsyncThunk(
  'serviceprovider/deleteservice',
  async (_, { rejectWithValue }) => {
    try {
      // Call API to install user
      const response = await serviceproviderService.deleteservice();
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


export const serviceproviderSlice = createSlice({
  name: "serviceprovider",
  initialState: {
    isLoading: false,
    isError: null,
    message: "",
  },
 
  extraReducers: (builder) => {
    builder
      .addCase(createservice.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createservice.fulfilled, (state, action) => {
        console.log({ action })
        state.isLoading = false;
        state.isSuccess = true;
        // state.message = 'Pending orders fetched successfully';
        state.createservice = action.payload;
      })
      .addCase(createservice.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.error.message;
        state.createservice = null
      })
      .addCase(showservice.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(showservice.fulfilled, (state, action) => {
        console.log({ action })
        state.isLoading = false;
        state.isSuccess = true;
        state.showservice = action.payload;
      })
      .addCase(showservice.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.showservice = null
      })
      .addCase(getservice.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getservice.fulfilled, (state, action) => {
        console.log({ action })
        state.isLoading = false;
        state.isSuccess = true;
        state.getservice = action.payload;
      })
      .addCase(getservice.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.getservice = null
      })
      .addCase(updateservice .pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateservice .fulfilled, (state, action) => {
        console.log({ action })
        state.isLoading = false;
        state.isSuccess = true;
        state.updateservice  = action.payload;
      })
      .addCase(updateservice .rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteservice .pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteservice .fulfilled, (state, action) => {
        console.log({ action })
        state.isLoading = false;
        state.isSuccess = true;
        state.deleteservice = action.payload;
      })
      .addCase(deleteservice.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

// export const { setPendingOrders, setCompletedOrders, setOrderStatus, setGetCount } = adminSlice.actions;

export default serviceproviderSlice.reducer;
