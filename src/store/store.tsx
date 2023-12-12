
import { configureStore, Reducer } from '@reduxjs/toolkit';
import authSliceReducer, { UserAuth } from '../config/auth/reducerAuthContext';
const rootReducer = {
    auth: authSliceReducer
}
const store = configureStore({
    reducer: rootReducer
})
export default store;

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>