/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { getDataPrivate, logoutAPI } from "../utils/api";
import { jwtStorage } from "../utils/jwt_storage";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [roles, setRoles] = useState("");
  const [userProfile, setUserProfile] = useState({});
  const [loadingContext, setLoadingContext] = useState(true);

  const getDataProfile = () => {
    getDataPrivate("/api/v1/protected/data")
      .then((resp) => {
        if (resp?.user_logged) {
          setUserProfile(resp);
          setRoles(resp?.roles)
          setIsLoggedIn(true);
          setLoadingContext(false);
        } else {
          setIsLoggedIn(false);
          setLoadingContext(false); 
        }
      })
      .catch((err) => {
        setIsLoggedIn(false);
        setLoadingContext(false); 
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

  const loginMember = (access_token) => {
    jwtStorage.storeToken(access_token);
    getDataProfile();
    navigate("/jasa", { replace: true });
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

  const logoutMember = () => {
    logoutAPI()
      .then((resp) => {
        if (resp?.isLoggedOut) {
          jwtStorage.removeItem();
          setIsLoggedIn(false);
          navigate("/jasa", { replace: true });
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <AuthContext.Provider 
      value={{ 
        isLoggedIn, 
        login, 
        loginMember,
        logout, 
        logoutMember,
        userProfile, 
        setRole, 
        roles,
        loadingContext
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
