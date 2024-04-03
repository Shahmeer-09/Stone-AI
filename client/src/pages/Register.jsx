import React from "react";
import Wrapper from "../assets/Wrapper/RegisterandLogin";
import { Form, Link, redirect, useNavigation } from "react-router-dom";
import { Logo } from "../components/index";
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";
export const action = async ({ request }) => {
  const FormData = await request.formData();
  const data = Object.fromEntries(FormData);
  console.log(data);
  try {
    const response = await customFetch.post("/auth/signup", data);
    console.log(response);
    toast.success("Registration successful");
    return redirect('/login')
  } catch (error) {
    toast.error(error.response?.data?.msg);
    return error;
  }
};

const Register = () => {
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting' 
  return (
    <Wrapper>
      <Form method="post" className="form">
        <div className="logoo">
          <Logo />
        </div>
        <div className="form-row">
          <input
            type="text"
            name="username"
            placeholder="Username..."
            className="form-input"
          />
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
        <button disabled={isSubmitting} type="submit" className="btn btn-block">
          {isSubmitting ? 'Registering...' : 'Register'}
        </button>
        <p>
          Already have an account? <Link to={"/login"}>Login</Link>
        </p>
      </Form>
    </Wrapper>
  );
};

export default Register;
