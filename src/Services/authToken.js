import { jwtDecode } from "jwt-decode";
import { ToastContainer, toast } from "react-toastify";
import { useLocation, useHistory } from "react-router-dom";

export const setAuthToken = (token) => {
  sessionStorage.setItem("token", token);
};

export const getAuthToken = () => {
  if (sessionStorage.getItem("token")) {
    const user = jwtDecode(sessionStorage.getItem("token"));
    if (Date.now() >= user.exp * 1000) {
      console.log("Token expired")
      // remove token
      removeAuthToken();
      return {};
    }
    return { token: sessionStorage.getItem("token"), user: user };
  } else {
    return {};
  }
};

export const removeAuthToken = () => {
  if (sessionStorage.getItem("token")) {
    sessionStorage.removeItem("token");
  }
};
