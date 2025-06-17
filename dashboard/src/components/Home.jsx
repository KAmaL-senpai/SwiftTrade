import { useEffect, useState } from "react";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import axios from "axios";
import { useCookies } from "react-cookie";
import { ToastContainer } from "react-toastify";

const Home = () => {
  const [, , removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const verifyCookie = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_API_BASE_URL}/verify`,
          {
            withCredentials: true,
          }
        );

        const { status, user } = data;

        if (!status) {
          removeCookie("token");
          window.location.href = `${process.env.REACT_APP_FRONTEND_URL}/login`;
        } else {
          setUsername(user);
        }
      } catch (err) {
        console.error("Verification failed:", err);
        removeCookie("token");
        window.location.href = `${process.env.REACT_APP_FRONTEND_URL}/login`;
      }
    };

    verifyCookie();
  }, [removeCookie]);

  return (
    <>
      <TopBar user={username} />
      <Dashboard user={username} />
      <ToastContainer />
    </>
  );
};

export default Home;
