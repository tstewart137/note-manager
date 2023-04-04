import { configureStore } from "@reduxjs/toolkit";
import { noteReducer } from "./notes/notes-slice";
import { authReducer } from "./auth/auth-slice";

export const store = configureStore({
  reducer: {
    notesSlice: noteReducer,
    authSlice: authReducer,
  },
});