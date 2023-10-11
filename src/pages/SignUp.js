import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link, Typography, TextField, Button } from "@mui/material";

export const SignUp = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = {
        username: form.username,
        password: form.password,
      };

      const response = await axios.post(
        "http://localhost:8080/register",
        formData
      );
      console.log("Response:", response);
      navigate("/sign-in");
    } catch (error) {
      console.error("Registration Error:", error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col h-screen items-center justify-center">
          <Typography className="" component="h1" variant="h5">
            Sign up
          </Typography>

          <div className="m-2 w-3/12">
            <TextField
              required
              fullWidth
              type="text"
              id="username"
              label="Username"
              name="username"
              value={form.username}
              onChange={handleChange}
              autoComplete="username"
            />
          </div>
          <div className="m-2 w-3/12">
            <TextField
              required
              fullWidth
              type="password"
              id="password"
              label="Password"
              name="password"
              value={form.password}
              onChange={handleChange}
              autoComplete="password"
            />
          </div>
          <div className="m-2 w-3/12">
            <TextField
              required
              fullWidth
              type="password"
              id="confirmPassword"
              label="Confirm Password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              autoComplete="confirmPassword"
            />
          </div>
          <div className="w-1/12 mt-2">
            <Button type="submit" fullWidth variant="contained">
              Sign Up
            </Button>
          </div>

          <div className="mt-5">
            <Link href="/sign-in">Already have an account? Sign in</Link>
          </div>
        </div>
      </form>
    </>
  );
};
