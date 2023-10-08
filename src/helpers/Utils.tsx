import Cookies from "js-cookie";
import CryptoJS from "crypto-js";
import moment from "moment";

import { toast } from "react-toastify";

// Key of encryption
const keyEncryption: string = process.env.NEXT_ENCRYPTION_KEY ?? "";

/**
 * Function to encrypt data
 *
 * @param data string
 */
export const encryptData = (data: string): string => {
  return CryptoJS.AES.encrypt(data, keyEncryption as string).toString();
};

/**
 * Function to encrypt data
 *
 * @param data string
 */
export const decryptData = (data: string): any => {
  const decryptedBytes = CryptoJS.AES.decrypt(data, keyEncryption as string);

  return decryptedBytes?.toString(CryptoJS.enc.Utf8);
};

/**
 * Function to get credential as object
 *
 * @returns void
 */
export const getCredential = (): object | null => {
  const user = Cookies.get("user");

  if (user !== undefined) {
    try {
      const data = decryptData(user);

      return JSON.parse(data);
    } catch (error) {
      toast.error("Something went wrong, please login again", {
        toastId: "error",
      });

      Cookies.remove("user");
    }
  }
  return null;
};
