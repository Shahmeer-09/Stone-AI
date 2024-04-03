import React from "react";
import Wrapper from "../assets/Wrapper/RegisterandLogin";
import { Form, Link, useNavigation, redirect } from "react-router-dom";
import { Logo } from "../components/index";
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";

export const action = async ({ request }) => {
  const FormData = await request.formData();
  const data = Object.fromEntries(FormData);
  try {
 await customFetch.post("/auth/login", data);

    toast.success("login successful");
    return redirect("/dashboard");
  } catch (error) {
    toast.error(error.response?.data?.msg);
    return error;
  }
};
const Login = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <Wrapper>
      <Form method="post" className="form">
        <div className="logoo">
          <Logo />
        </div>
        <div className="form-row">
          <input
            type="email"
            name="email"
            placeholder="Email..."
            className="form-input"
          />
        </div>
        <div className="form-row">
          <input
            type="password"
            name="password"
            placeholder="password..."
            className="form-input"
          />
        </div>
        <button type="submit" disabled={isSubmitting} className="btn btn-block">
          {isSubmitting ? "loading..." : "Login"}
        </button>
        <p>
          Don`t have an account? <Link to={"/register"}>Register</Link>
        </p>
      </Form>
    </Wrapper>
  );
};

export default Login;
