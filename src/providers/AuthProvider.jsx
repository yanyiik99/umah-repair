/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { getDataPrivate, logoutAPI } from "../utils/api";
import { jwtStorage } from "../utils/jwt_storage";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Replace with your logic
  const [roles, setRoles] = useState("");
  const [userProfile, setUserProfile] = useState({});

  const navigate = useNavigate();

  const getDataProfile = () => {
    getDataPrivate("/api/v1/protected/data")
      .then((resp) => {
        if (resp?.user_logged) {
          setUserProfile(resp);
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      })
      .catch((err) => {
        setIsLoggedIn(false);
        console.log(err);
      });
  };

  useEffect(() => {
    getDataProfile();
  }, []);

  const login = (access_token) => {
    jwtStorage.storeToken(access_token);
    getDataProfile();
    navigate("/ternaklele/admin/dashboard", { replace: true });
  };

  const setRole = (roles) => {
    setRoles(roles)
  };

  const logout = () => {
    logoutAPI()
      .then((resp) => {
        if (resp?.isLoggedOut) {
          jwtStorage.removeItem();
          setIsLoggedIn(false);
          navigate("/ternaklele/admin/login", { replace: true });
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, userProfile, setRole, roles}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
