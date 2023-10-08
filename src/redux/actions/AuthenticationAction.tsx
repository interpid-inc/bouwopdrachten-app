import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "@/redux/store";
import Cookies from "js-cookie";
import { axiosClient } from "@/helpers/GatewayService";
import { encryptData } from "@/helpers/Utils";

interface initialState {
  isLoading: boolean;
  data: any;
  error: string | null;
  status: number;
}

const initialState: initialState = {
  isLoading: false,
  data: null,
  error: null,
  status: 0,
};

// ---------------------------------Request Login--------------------------------- \\
interface LoginForm {
  email: string;
  password: string;
  remember_me: string;
}

export const requestLoginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    requestLoginStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    requestLoginSuccess(state, action: PayloadAction<LoginForm[]>) {
      state.isLoading = false;
      state.data = action.payload;
      state.error = null;
      state.status = 200;
    },
    requestLoginFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
      state.status = 400;
    },
    requestLoginReset(state) {
      state.isLoading = false;
      state.data = [];
      state.error = null;
      state.status = 0;
    },
  },
});

export const {
  requestLoginStart,
  requestLoginSuccess,
  requestLoginFailure,
  requestLoginReset,
} = requestLoginSlice.actions;

export const makeLoginRequest =
  (formData: FormData) => async (dispatch: AppDispatch) => {
    try {
      dispatch(requestLoginStart());

      const response = await axiosClient.post("auth/login", formData);

      dispatch(requestLoginSuccess(response.data));
      // if remember me is true, set cookie expires on session/default 1 month
      (formData.get("rememberMe") as any) !== "false"
        ? Cookies.set("user", encryptData(JSON.stringify(response.data)))
        : Cookies.set("user", encryptData(JSON.stringify(response.data)), {
            expires: 1,
          });

      // redirect to dashboard
      window.location.href = "/dashboard";
    } catch (error: any) {
      dispatch(requestLoginFailure(error?.response?.data?.message));
    }
  };

export const makeLoginRequestClear = () => async (dispatch: AppDispatch) => {
  dispatch(requestLoginReset());
};

// ---------------------------------OTP Verification--------------------------------- \\
interface LoginOTP {
  otp: string;
  email: string;
}

export const otpVerificationSlice = createSlice({
  name: "otpVerification",
  initialState,
  reducers: {
    otpVerificationStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    otpVerificationSuccess(state, action: PayloadAction<LoginForm[]>) {
      state.isLoading = false;
      state.data = action.payload;
      state.error = null;
      state.status = 200;
    },
    otpVerificationFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
      state.status = 400;
    },
  },
});

export const {
  otpVerificationStart,
  otpVerificationSuccess,
  otpVerificationFailure,
} = otpVerificationSlice.actions;

export const requestLoginOTP =
  (formData: LoginOTP) => async (dispatch: AppDispatch) => {
    try {
      dispatch(otpVerificationStart());

      const response = await axiosClient.post(
        "administrator/auth/login/otp",
        formData
      );
      dispatch(otpVerificationSuccess(response.data));

      // set response data to local storage
      localStorage.setItem("admin", JSON.stringify(response.data));
    } catch (error: any) {
      dispatch(otpVerificationFailure(error?.response?.data?.message));
    }
  };

// ---------------------------------Logout Request--------------------------------- \\
export const logoutRequestSlice = createSlice({
  name: "logout",
  initialState,
  reducers: {
    logoutRequestStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    logoutRequestSuccess(state, action: PayloadAction<LoginForm[]>) {
      state.isLoading = false;
      state.data = action.payload;
      state.error = null;
      state.status = 200;
    },
    logoutRequestFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
      state.status = 400;
    },
  },
});

export const {
  logoutRequestStart,
  logoutRequestSuccess,
  logoutRequestFailure,
} = logoutRequestSlice.actions;

export const logoutRequest = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(logoutRequestStart());
    const response = await axiosClient.delete("auth/logout");

    dispatch(logoutRequestSuccess(response.data));

    Cookies.remove("user");

    window.location.href = "/login";
  } catch (error: any) {
    console.log(error);

    dispatch(logoutRequestFailure(error?.response?.data?.message));
  }
};

// ---------------------------------Reset Password By Email--------------------------------- \\
interface ResetPasswordByEmail {
  email: string;
}

export const resetPasswordByEmailSlice = createSlice({
  name: "resetPasswordByEmail",
  initialState,
  reducers: {
    resetPasswordByEmailStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    resetPasswordByEmailSuccess(state, action: PayloadAction<LoginForm[]>) {
      state.isLoading = false;
      state.data = action.payload;
      state.error = null;
      state.status = 200;
    },
    resetPasswordByEmailFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
      state.status = 400;
    },
    resetPasswordByEmailReset(state) {
      state.isLoading = false;
      state.data = [];
      state.error = null;
      state.status = 0;
    },
  },
});

export const {
  resetPasswordByEmailStart,
  resetPasswordByEmailSuccess,
  resetPasswordByEmailFailure,
  resetPasswordByEmailReset,
} = resetPasswordByEmailSlice.actions;

export const resetPasswordByEmailRequest =
  (formData: ResetPasswordByEmail) => async (dispatch: AppDispatch) => {
    try {
      dispatch(resetPasswordByEmailStart());
      const response = await axiosClient.post(
        "administrator/auth/reset-password/email",
        formData
      );

      dispatch(resetPasswordByEmailSuccess(response.data));
    } catch (error: any) {
      dispatch(resetPasswordByEmailFailure(error?.response?.data?.message));
    }
  };

export const resetPasswordByEmailClear =
  () => async (dispatch: AppDispatch) => {
    dispatch(resetPasswordByEmailReset());
  };

// ---------------------------------Accept Reset Password By Email--------------------------------- \\
interface NewPasswordForm {
  new_password: string;
  new_password_confirmation: string;
}

export const acceptPasswordByEmailSlice = createSlice({
  name: "acceptPasswordByEmail",
  initialState,
  reducers: {
    acceptPasswordByEmailStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    acceptPasswordByEmailSuccess(state, action: PayloadAction<LoginForm[]>) {
      state.isLoading = false;
      state.data = action.payload;
      state.error = null;
      state.status = 200;
    },
    acceptPasswordByEmailFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
      state.status = 400;
    },
    acceptPasswordByEmailReset(state) {
      state.isLoading = false;
      state.data = [];
      state.error = null;
      state.status = 0;
    },
  },
});

export const {
  acceptPasswordByEmailStart,
  acceptPasswordByEmailSuccess,
  acceptPasswordByEmailFailure,
  acceptPasswordByEmailReset,
} = acceptPasswordByEmailSlice.actions;

export const acceptPasswordByEmailRequest =
  (formData: FormData, reset_token: string) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(acceptPasswordByEmailStart());
      const response = await axiosClient.post(
        "administrator/auth/reset-password/email/accept",
        formData,
        {
          params: {
            reset_token,
          },
        }
      );

      dispatch(acceptPasswordByEmailSuccess(response.data));
    } catch (error: any) {
      dispatch(acceptPasswordByEmailFailure(error?.response?.data?.message));
    }
  };

export const acceptPasswordByEmailClear =
  () => async (dispatch: AppDispatch) => {
    dispatch(acceptPasswordByEmailReset());
  };
