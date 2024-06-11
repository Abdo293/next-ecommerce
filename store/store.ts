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
import favoritesSlice from "./favoritesSlice";
import compareSlice from "./compareSlice";

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

// Config for favorites slice
const favoritesPersistConfig = {
  key: "favorites",
  storage,
};

// Config for compare slice
const comparePersistConfig = {
  key: "favorites",
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
const persistedFavoritesReducer = persistReducer(
  favoritesPersistConfig,
  favoritesSlice
);
const persistedCompareReducer = persistReducer(
  comparePersistConfig,
  compareSlice
);

export const store = configureStore({
  reducer: {
    cart: persistedProductReducer,
    productDetails: persistedDetailsReducer,
    favorites: persistedFavoritesReducer,
    compare: persistedCompareReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
