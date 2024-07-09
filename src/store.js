import { configureStore } from '@reduxjs/toolkit'

import { setupListeners } from '@reduxjs/toolkit/query'
import { viewOrderApi } from './services/ViewOrderService'

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [viewOrderApi.reducerPath]: viewOrderApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(viewOrderApi.middleware),
})

setupListeners(store.dispatch)