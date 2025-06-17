import { useEffect, useState } from "react";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import axios from "axios";
import { useCookies } from "react-cookie";
import { ToastContainer, toast } from "react-toastify";

const Home = () => {
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");
  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        window.location.href = `${import.meta.env.fronend_url}/login`;
      }

      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/verify`,
          {
            withCredentials: true,
          }
        );

        const { status, user } = data;
        setUsername(user);

      } catch (err) {
        console.error(err);
        removeCookie("token");
        window.location.href = `${import.meta.env.fronend_url}/login`;
      }
    };

    verifyCookie();
  }, [cookies, removeCookie]);

  return (
    <>
      <TopBar user={username} />
      <Dashboard user={username} />
      <ToastContainer />
    </>
  );
};

export default Home;
