import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";

const ProtectedRoute = ({ children }) => {
  let isLoggedIn = localStorage.getItem("authToken") === "loggedin123" ? true : false;  
  // or use context / redux
  const { email,pass } = useContext(AuthContext);

  if(email == "mohit@gmail.com" || pass == "mohit123"){
    isLoggedIn ?  false :  true;
  }

  return isLoggedIn ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;
