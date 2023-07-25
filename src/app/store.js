import { configureStore} from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import serviceproviderReducer from '../features/serviceprovider/serviceproviderSlice';
import realestateReducer from '../features/realestate/realestateSlice';
import shopReducer from '../features/shop/shopSlice';


export default configureStore({
  reducer: {
    auth: authReducer,
    serviceprovider: serviceproviderReducer ,
    realestate: realestateReducer ,
    shop: shopReducer ,
  },
});