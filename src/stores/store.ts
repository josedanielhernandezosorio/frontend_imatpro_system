import { configureStore } from '@reduxjs/toolkit'
import styleReducer from './styleSlice'
import mainReducer from './mainSlice'
import snackBarReducer from './snackBarSlice'
import layoutReducer from './layoutSlice'

export const store = configureStore({
  reducer: {
    style: styleReducer,
    main: mainReducer,
    snackBar: snackBarReducer,
    layout: layoutReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
