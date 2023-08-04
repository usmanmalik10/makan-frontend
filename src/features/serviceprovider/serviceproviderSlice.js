import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import serviceproviderService from "./serviceproviderService";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user || null,
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
  services: [], // An array to store the list of services
  selectedService: null, // A single service object
};

export const createservice = createAsyncThunk(
  'serviceprovider/createservice',
  async (serviceData, token, {rejectWithValue}) => {
    try {
      // Call API to subscribe user
      const response = await serviceproviderService.createservice(serviceData, token);
      console.log({response})
      return response.data;
    } catch (error) {
      console.log({error});
      const message =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();
              console.log({message});
      return rejectWithValue(message);
      
    }
    } 
);

// Thunk to fetch the list of services
export const showservice = createAsyncThunk(
  "serviceprovider/showservice",
  async (token, limit, page, sortBy, category, { rejectWithValue }) => {
    try {
      const response = await serviceproviderService.showservice(token, limit, page, sortBy, category);
      return response;
    } catch (error) {
      return rejectWithValue(getErrorMessage(error));
    }
  }
);

// Thunk to fetch a single service by ID
export const getservice = createAsyncThunk(
  "serviceprovider/getservice",
  async (serviceId, { rejectWithValue }) => {
    try {
      const response = await serviceproviderService.getservice(serviceId);
      return response;
    } catch (error) {
      return rejectWithValue(getErrorMessage(error));
    }
  }
);

// Thunk to update a service
export const updateservice = createAsyncThunk(
  "serviceprovider/updateservice",
  async (serviceData, { rejectWithValue }) => {
    try {
      const response = await serviceproviderService.updateservice(serviceData);
      return response;
    } catch (error) {
      return rejectWithValue(getErrorMessage(error));
    }
  }
);

// Thunk to delete a service
export const deleteservice = createAsyncThunk(
  "serviceprovider/deleteservice",
  async (serviceId, { rejectWithValue }) => {
    try {
      const response = await serviceproviderService.deleteservice(serviceId);
      return response;
    } catch (error) {
      return rejectWithValue(getErrorMessage(error));
    }
  }
);

const getErrorMessage = (error) =>
  (error.response && error.response.data && error.response.data.message) ||
  error.message ||
  error.toString();

const serviceproviderSlice = createSlice({
  name: 'serviceprovider',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createservice.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createservice.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.services = action.payload;
      })
      .addCase(createservice.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(showservice.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(showservice.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.services = action.payload;
      })
      .addCase(showservice.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getservice.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getservice.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.selectedService = action.payload;
      })
      .addCase(getservice.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(updateservice.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateservice.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        // Update the corresponding service in the services array
        const updatedIndex = state.services.findIndex(
          (service) => service.id === action.payload.id
        );
        if (updatedIndex !== -1) {
          state.services[updatedIndex] = action.payload;
        }
      })
      .addCase(updateservice.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteservice.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteservice.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        // Remove the deleted service from the services array
        state.services = state.services.filter(
          (service) => service.id !== action.payload.id
        );
      })
      .addCase(deleteservice.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export default serviceproviderSlice.reducer;
