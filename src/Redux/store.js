import { configureStore, combineReducers } from '@reduxjs/toolkit';
import authReducer, { fetchCurrentUser } from './Slices/authSlice';
import serviceproviderReducer from '../features/serviceprovider/serviceproviderSlice';
import realestateReducer from '../features/realestate/realestateSlice';
import shopReducer from '../features/shop/shopSlice';
import estateApi from './RtkQuery/EstateAllData'
import serviceApi from './RtkQuery/ServiceDashboard'
import storesApi from './RtkQuery/StoresDashboard'
import MainPageRealEstate from './RtkQuery/MainPageRealEstate'
import MainPageStore from './RtkQuery/MainPageStore'
import MainPageService from './RtkQuery/MainPageService'
import StrategicSalesPartner from './RtkQuery/StrategicSalesPartner';
import Dailyrates from './RtkQuery/DailyRates';
import Dashboard from './RtkQuery/Dashboard';



const store =  configureStore({
  reducer: {
    [MainPageRealEstate.reducerPath]: MainPageRealEstate.reducer,
    [MainPageStore.reducerPath]: MainPageStore.reducer,
    [MainPageRealEstate.reducerPath]: MainPageRealEstate.reducer,
    [serviceApi.reducerPath]: serviceApi.reducer,
    [estateApi.reducerPath]: estateApi.reducer,
    [storesApi.reducerPath]: storesApi.reducer,
    [MainPageService.reducerPath]: MainPageService.reducer,
    [StrategicSalesPartner.reducerPath]: StrategicSalesPartner.reducer,
    [Dailyrates.reducerPath]: Dailyrates.reducer,
[Dashboard.reducerPath] : Dashboard.reducer,
  
    auth: authReducer,
    serviceprovider: serviceproviderReducer,
    realestate: realestateReducer,
    shop: shopReducer,
  
  
  
  
  
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(estateApi.middleware , serviceApi.middleware , storesApi.middleware , MainPageRealEstate.middleware , MainPageStore.middleware , MainPageService.middleware, StrategicSalesPartner.middleware, Dailyrates.middleware , Dashboard.middleware)
});

store.dispatch(fetchCurrentUser());
export default store;