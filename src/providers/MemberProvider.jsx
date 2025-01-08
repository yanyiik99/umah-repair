/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { getDataPrivate, logoutAPI } from "../utils/api";
import { jwtStorage } from "../utils/jwt_storage";

export const AuthContextMember = createContext(null);

const MemberProvider = ({ children }) => {
  const [isLoggedInMember, setIsLoggedInMember] = useState(false); // Replace with your logic
  const [rolesMember, setRolesMember] = useState(""); // Replace with your logic
  const [userProfile, setUserProfile] = useState({});

  const navigate = useNavigate();

  const getDataProfile = () => {
    getDataPrivate("/api/v1/protected/data")
      .then((resp) => {
        if (resp?.user_logged) {
          setUserProfile(resp);
          setIsLoggedInMember(true);
        } else {
          setIsLoggedInMember(false);
        }
      })
      .catch((err) => {
        setIsLoggedInMember(false);
        console.log(err);
      });
  };

  useEffect(() => {
    getDataProfile();
  }, []);

  const loginMember = (access_token) => {
    jwtStorage.storeToken(access_token);
    getDataProfile();
    navigate("/jasa", { replace: true });
  };

  const setRoleMember = (role) => {
    setRolesMember(role);
  };

  const logoutMember = () => {
    logoutAPI()
      .then((resp) => {
        if (resp?.isLoggedOut) {
          jwtStorage.removeItem();
          setIsLoggedInMember(false);
          navigate("/auth/login", { replace: true });
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <AuthContextMember.Provider value={{ isLoggedInMember, loginMember, logoutMember, userProfile, setRoleMember}}>
      {children}
    </AuthContextMember.Provider>
  );
};

export default MemberProvider;
