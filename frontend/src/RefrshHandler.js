import { useEffect } from "react";

const RefrshHandler = ({ setIsAuthenticated }) => {

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setIsAuthenticated(true);
    }
  }, [setIsAuthenticated]);

  return null;
};

export default RefrshHandler;