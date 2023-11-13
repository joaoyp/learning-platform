import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link, Typography, TextField, Button } from "@mui/material";
import { TertiaryButton } from "../components/common/TertiaryButton";
import { PrimaryButton } from "../components/common/PrimaryButton";
import { Lettering } from "../components/common/Lettering";

export const SignUp = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Register | Learning Platform";
  }, []);

  const [form, setForm] = useState({
    username: "",
    email: "",
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
        email: form.email,
      };

      const response = await axios.post(
        "http://localhost:8080/auth/register",
        formData
      );
      console.log("Response:", response.data.message);
      navigate("/sign-in");
    } catch (error) {
      console.error("Registration Error:", error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col h-real-screen items-center justify-center">
          <div className="text-teal-950">
            <Lettering text={"Sign Up"} fontSize={30} />
          </div>
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
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "#008080",
                  },
                },
              }}
            />
          </div>
          <div className="m-2 w-3/12">
            <TextField
              required
              fullWidth
              type="email"
              id="email"
              label="Email"
              name="email"
              value={form.email}
              onChange={handleChange}
              autoComplete="email"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "#008080",
                  },
                },
              }}
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
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "#008080",
                  },
                },
              }}
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
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "#008080",
                  },
                },
              }}
            />
          </div>
          <div className="mt-4">
            <PrimaryButton size={"large"} text={"Sign Up"} type={"submit"} />
          </div>

          <div className="mt-5">
            <Link to="/sign-in">
              <TertiaryButton text={"Already have an account? Sign in"} />
            </Link>
          </div>
        </div>
      </form>
    </>
  );
};
