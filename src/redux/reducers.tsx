import { combineReducers } from "@reduxjs/toolkit";

import {
  requestLoginSlice,
  otpVerificationSlice,
  logoutRequestSlice,
  resetPasswordByEmailSlice,
  acceptPasswordByEmailSlice,
} from "@/actions/AuthenticationAction";

export const RootReducer = combineReducers({
  // Define reducers here
  loginRequest: requestLoginSlice.reducer,
  otpVerification: otpVerificationSlice.reducer,
  logoutRequest: logoutRequestSlice.reducer,
  resetPasswordByEmail: resetPasswordByEmailSlice.reducer,
  acceptPasswordByEmail: acceptPasswordByEmailSlice.reducer,
});

export default RootReducer;
