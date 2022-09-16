import { configureStore } from "@reduxjs/toolkit";

import studentSlice from "./student-slice";

const store = configureStore({ reducer: { student: studentSlice.reducer } });

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch