import { createSlice } from "@reduxjs/toolkit";
import authConfig, { jwtDecode, setSession } from "./auth";

export interface User {
  accessToken?: string;
  email: string;
  displayName?: string;
  photoUrl?: string;
  phoneNumber?: string;
}
export interface UserAuth {
  user: User | null;
  isAuthenciated: boolean;
}

const getInitialAuthState = () => {
  // Logic để lấy initial state, ví dụ:
  const accessTokenFirebase = window.localStorage.getItem(
    authConfig.storageTokenKeyName
  );
  if (accessTokenFirebase) {
    const infoUser = jwtDecode(accessTokenFirebase);
    const { email, name, picture } = infoUser;
    return {
      user: {
        accessToken: accessTokenFirebase,
        email,
        displayName: name,
        photoUrl: picture,
        phoneNumber: infoUser.phoneNumber || "",
      },
      isAuthenciated: true,
    };
  } else {
    return {
      user: null,
      isAuthenciated: false,
    };
  }
};

const initialAuthState: UserAuth = getInitialAuthState();

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state, action) {
      // state.push(action.payload);
    },
    loginFirebase(state, action) {
      setSession(action.payload.user.accessToken);
      state.user = action.payload.user;
      state.isAuthenciated = true;
    },
    logout(state) {
      window.localStorage.removeItem(authConfig.storageTokenKeyName);
      state.user = null;
      state.isAuthenciated = false;
    },
  },
});

const { actions, reducer: authSliceReducer } = authSlice;
export const { login, logout, loginFirebase } = actions;
export default authSliceReducer;
