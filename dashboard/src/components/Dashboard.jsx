import { Route, Routes } from "react-router-dom";

import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";

import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import { GeneralContextProvider } from "./GeneralContext";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Dashboard = ({ user }) => {
  const [userHoldings, setUserHoldings] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.VITE_API_BASE_URL}/allHoldings`, {
        withCredentials: true,
      })
      .then((res) => {
        console.log("Holdings Response:", res.data);
        // Ensure response is an array
        if (Array.isArray(res.data)) {
          setUserHoldings(res.data);
        } else {
          setUserHoldings([]); // fallback to empty array if invalid
          console.error("Expected array but got:", res.data);
        }
      })
      .catch((err) => {
        console.error("Failed to fetch holdings", err);
        setUserHoldings([]); // fallback on error
      });
  }, []);
  return (
    <div className="dashboard-container">
      <GeneralContextProvider userHoldings={userHoldings}>
        <WatchList />
      </GeneralContextProvider>
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Summary user={user} />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<Apps />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
