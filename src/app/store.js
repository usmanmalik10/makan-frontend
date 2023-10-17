import { configureStore, combineReducers } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import serviceproviderReducer from '../features/serviceprovider/serviceproviderSlice';
import realestateReducer from '../features/realestate/realestateSlice';
import shopReducer from '../features/shop/shopSlice';
import estateApi from '../Redux/RtkQuery/EstateAllData'
import serviceApi from '../Redux/RtkQuery/ServiceDashboard'
import storesApi from '../Redux/RtkQuery/StoresDashboard'
import MainPageRealEstate from '../Redux/RtkQuery/MainPageRealEstate'
import MainPageStore from '../Redux/RtkQuery/MainPageStore'
import MainPageService from '../Redux/RtkQuery/MainPageService'




const rootReducer = combineReducers({
  [MainPageRealEstate.reducerPath]: MainPageRealEstate.reducer,
  [MainPageStore.reducerPath]: MainPageStore.reducer,
  [MainPageRealEstate.reducerPath]: MainPageRealEstate.reducer,
  [serviceApi.reducerPath]: serviceApi.reducer,
  [estateApi.reducerPath]: estateApi.reducer,
  [storesApi.reducerPath]: storesApi.reducer,
  [MainPageService.reducerPath]: MainPageService.reducer,

  auth: authReducer,
  serviceprovider: serviceproviderReducer,
  realestate: realestateReducer,
  shop: shopReducer,





});

export default configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(estateApi.middleware).concat(serviceApi.middleware).concat(storesApi.middleware).concat(MainPageRealEstate.middleware).concat(MainPageStore.middleware).concat(MainPageService.middleware), // Add RTK Query middleware
});
