import { createContext, useState } from "react";
import axios from "axios";
export const userContext = createContext();
export default function UserProvider({ children }) {
  const [token, setToken] = useState(null);
  const logInHandler = (username, password) => {
    axios
      .post("https://dummyjson.com/auth/login", {
        username,
        password,
      })
      .then((res) => {
        if (res.status === 200) {
          setToken(res.data.token);
        }
      });
  };
  return (
    <userContext.Provider value={{ token, setToken, logInHandler }}>
      {children}
    </userContext.Provider>
  );
}
