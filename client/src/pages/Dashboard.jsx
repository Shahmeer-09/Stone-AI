import { useNavigation } from "react-router-dom";
import React, {  useState} from "react";
import customFetch from "../utils/customFetch";
import {useNavigate, redirect} from "react-router-dom";
import Wrapper from "../assets/Wrapper/Dashboard";
import { Logo, SidebaIcon, Signout  } from "../components/index";
import { Outlet } from "react-router-dom";

import { toast } from "react-toastify";

export const loader = async () => {
  try {
    const { data } = await customFetch.get("/user/currentUser");
    return data;
  } catch (error) {
    toast.error(error.response?.data?.msg);
    return redirect("/login");
  }
};
const Dashboard = () => {
  const navigate = useNavigate();
  const navigation = useNavigation();
  const isloading = navigation.state === "loading";
  console.log(isloading)
  console.log('im dashboard')
   const logout = async () => {
     try {
       await customFetch.get("/auth/logout");
       toast.success("Logged out successfully");
       
       navigate("/login");
     } catch (error) {
       toast.error(error.response?.data?.msg);
     }
   }
  return (
   
        <Wrapper >
          <Signout logout={logout}/>
          <div className="logo-cont">
            <Logo />
          </div>
          <div className="sidebar">
            <SidebaIcon />
          </div>
          <div>
            <Outlet />  
          </div>
        </Wrapper>

  );
};

export default Dashboard;
