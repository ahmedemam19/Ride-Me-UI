import { createContext, useContext, useState } from "react";
import { getAuthToken } from "../../Services/authToken";

const AuthContext = createContext();
export const AuthData = () => useContext(AuthContext)

export const AuthWrapper = () => {
  const { token, user } = getAuthToken();
  
}