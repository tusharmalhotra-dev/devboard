import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import projectReducer from './slices/projectSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        project: projectReducer,
    },
});

export default store; 