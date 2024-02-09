import { configureStore } from '@reduxjs/toolkit'
import Reactotron from "../../ReactotronConfig";
import { SliceReducer } from './slices'

export const store = configureStore({
    reducer: {
        SliceReducer,
    },
    enhancers: __DEV__ ? [Reactotron.createEnhancer!()] : [] as any,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch