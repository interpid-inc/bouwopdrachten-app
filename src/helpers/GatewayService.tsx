import axios, { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { getCredential } from "./Utils";

const apiUrl: string =
  process.env.NEXT_PUBLIC_API_URL ?? "https://api-staging.constructapp.online";

/**
 * Create axios
 */
const axiosClient = axios.create({
  withCredentials: true,
  baseURL: apiUrl,
  headers: {
    Accept: "application/json",
  },
});

/**
 * Request interceptor. Runs before your request reaches the server
 *
 * @param {any} config
 * @returns {any}
 */
const onRequest = (config: any): any => {
  // If http method is `post | put | delete` and XSRF-TOKEN cookie is
  // Not present, call '/sanctum/csrf-cookie' to set CSRF token, then
  // Proceed with the initial response

  // If token not null, add token to header
  if (getCredential() !== null) {
    // initialize token
    const {
      token,
    }: {
      token: string;
    } = getCredential() as any;

    // add token to header
    config.headers.Authorization = `Bearer ${token}`;
  }

  // If token null, remove token from header
  if (getCredential() === null) {
    // remove token from header
    delete config.headers.Authorization;
  }

  return config;
};

/**
 * Function for handle error by status
 *
 * @param {number} status
 * @param message
 * @returns {string}
 */
const handleError = (status: number, message: any): string => {
  let errorMessage: string;
  switch (status) {
    case 400:
      errorMessage = message ?? "Bad request";
      break;
    case 401:
      errorMessage =
        "Your session has expired, you'll be redirected to login page";
      break;
    case 403:
      errorMessage =
        message ?? "Access denied, you are not authorized to access this page";
      break;
    case 404:
      errorMessage = message ?? "The requested resource could not be found";
      break;
    case 429:
      errorMessage = message ?? "Too many requests";
      break;
    case 500:
      errorMessage = message ?? "Internal Server Error";
      break;
    case 498:
      errorMessage = message ?? "Token expired";
      break;
    default:
      errorMessage = message ?? "An error occurred, please try again later";
      break;
  }
  return errorMessage;
};

// attach request
axiosClient.interceptors.request.use(onRequest, null);
// let errorDisplayed: boolean = false;

// attach response
axiosClient.interceptors.response.use(
  async (response: AxiosResponse) => {
    return response;
  },

  async (error: AxiosError<any>) => {
    // If error has response, show error message

    if (
      error.config !== undefined &&
      error.config.params?.intercept_error !== true
    ) {
      if (
        error?.response?.data !== undefined &&
        error?.response?.data !== null
      ) {
        if (error?.response?.status !== 422) {
          toast.error(
            handleError(
              error?.response?.status,
              error?.response?.data?.message
            ),
            {
              toastId: error?.response?.data?.message,
            }
          );

          // If error status is 500, reload page
          if (error?.response?.status === 500) {
            // reload page
            setTimeout(() => {
              window.location.reload();
            }, 2000);
          }
        } else {
          // Special Case for 422 when invite member to project
          if (
            error.response?.data?.message ===
            "This user or their company owner is already a member of this project."
          ) {
            toast.error(
              "This user or their company owner is already a member of this project.",
              {
                toastId:
                  "This user or their company owner is already a member of this project.",
              }
            );
            return await Promise.reject(error);
          }

          Object.keys(error?.response?.data?.errors).map((key: any) => {
            return toast.error(error?.response?.data?.errors[key][0], {
              toastId: error?.response?.data?.errors[key][0],
            });
          });
        }
      } else {
        toast.error("An error occurred, please try again later", {
          toastId: "An error occurred, please try again later",
        });
      }
    }

    // if unauthorized, redirect to login page
    if (error?.response?.status === 401) {
      setTimeout(async () => {
        Cookies.remove("user");
        // await beamsClient.stop();

        window.location.href = "/login";
      }, 2000);
    }

    return await Promise.reject(error);
  }
);

export { axiosClient };
