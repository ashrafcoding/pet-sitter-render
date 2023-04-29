import {
  useState,
  useContext,
  createContext,
  useEffect,
  useCallback,
} from "react";
import { useNavigate } from "react-router-dom";
import loginWithCookies from "../helpers/APICalls/loginWithCookies";
import logoutAPI from "../helpers/APICalls/logout";
import { useSocket } from "./useSocketContext";

export const AuthContext = createContext({
  loggedInUser: undefined,
  updateLoginContext: () => null,
  logout: () => null,
});

export const AuthProvider = ({ children }) => {
  // default undefined before loading, once loaded provide user or null if logged out
  const [loggedInUser, setLoggedInUser] = useState();
  const history = useNavigate();
  const { socket } = useSocket();

  const updateLoginContext = useCallback((data) => {
      setLoggedInUser(data.user);
  },[])

  const logout = useCallback(async () => {
    // needed to remove token cookie
    await logoutAPI()
      .then(() => {
        setLoggedInUser((val) => {
          if (val) socket?.emit("logout", val?.id);
          return val;
        });
        history("/login");
        setLoggedInUser(null);
      })
      .catch((error) => console.error(error));
  }, [history, socket]);

  // use our cookies to check if we can login straight away
  useEffect(() => {
    const checkLoginWithCookies = async () => {
      await loginWithCookies().then((data) => {
        if (data.success) {
          updateLoginContext(data.success);
          setLoggedInUser((val) => {
            if (val) {
              socket?.emit("go-online", val?.id);
              socket?.emit("join-room", val?.id);
            }
            return val;
          });
          // history("/dashboard");
        } else {
          // don't need to provide error feedback as this just means user doesn't have saved cookies or the cookies have not been authenticated on the backend
          setLoggedInUser(null);
          // history("/login");
        }
      });
    };
    checkLoginWithCookies();
  }, 
  [ history, socket]
  );

  return (
    <AuthContext.Provider value={{ loggedInUser, updateLoginContext, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  return useContext(AuthContext);
}
