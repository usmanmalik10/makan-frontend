import { configureStore, combineReducers } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import serviceproviderReducer from '../features/serviceprovider/serviceproviderSlice';
import realestateReducer from '../features/realestate/realestateSlice';
import shopReducer from '../features/shop/shopSlice';
import estateApi from '../Redux/RtkQuery/EstateAllData'
import serviceApi from '../Redux/RtkQuery/ServiceDashboard'
import storesApi from '../Redux/RtkQuery/StoresDashboard'


const rootReducer = combineReducers({
  auth: authReducer,
  serviceprovider: serviceproviderReducer,
  realestate: realestateReducer,
  shop: shopReducer,
  [estateApi.reducerPath]: estateApi.reducer, // Include the RTK Query reducer
  [serviceApi.reducerPath]: serviceApi.reducer,
  [storesApi.reducerPath]: storesApi.reducer,


});

export default configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(estateApi.middleware).concat(serviceApi.middleware).concat(storesApi.middleware), // Add RTK Query middleware
});
