import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import productDetailsSlice from "./productDetailsSlice";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

// Config for product slice
const productPersistConfig = {
  key: "product",
  storage,
};

// Config for product details slice
const productDetailsPersistConfig = {
  key: "productDetails",
  storage,
};

const persistedProductReducer = persistReducer(
  productPersistConfig,
  productSlice
);
const persistedDetailsReducer = persistReducer(
  productDetailsPersistConfig,
  productDetailsSlice
);

export const store = configureStore({
  reducer: {
    cart: persistedProductReducer,
    productDetails: persistedDetailsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
