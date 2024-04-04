import React, { useState } from "react";
import customFetch from "../utils/customFetch";
import { useLoaderData } from "react-router-dom";
import Wrapper from "../assets/Wrapper/Dashboard";
import { Logo, SidebaIcon } from "../components/index";
import { Outlet } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";
export const loader = async () => {
  try {
    const { data } = await customFetch.get("/user/currentUser");
    return data;
  } catch (error) {
    return error;
  }
};
const Dashboard = () => {
  const { rest: user } = useLoaderData();
  const [menuactive,setMenuactive] = useState(false)
  console.log(user);
  return (
    <Wrapper menuactive={menuactive}>
      <div className="logout" >
         <FaSignOutAlt onClick={()=> setMenuactive(!menuactive)} className="menu" />
         <h5>Logout</h5>
      </div>
      <div className="logo-cont">
        <Logo />
      </div>
      <div className="sidebar">
        <SidebaIcon />
      </div>
      <div>
          <Outlet/>
      </div>
    </Wrapper>
  );
};

export default Dashboard;
