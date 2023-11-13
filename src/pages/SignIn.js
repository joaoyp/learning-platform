import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link, Typography, TextField, Button } from "@mui/material";
import { Lettering } from "../components/common/Lettering";
import { PrimaryButton } from "../components/common/PrimaryButton";
import { TertiaryButton } from "../components/common/TertiaryButton";

export const SignIn = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Login | Learning Platform";
  }, []);

  const [form, setForm] = useState({
    username: "",
    password: "",
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
        "http://localhost:8080/auth/login",
        formData
      );
      console.log("Response:", response.data.message);
      localStorage.setItem("token", response.data.token);
      if (window.location.pathname === "/sign-in") {
        navigate("/");
        window.location.reload();
      } else {
        window.location.reload();
      }
    } catch (error) {
      console.error("Registration Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col h-real-screen items-center justify-center">
        <div className="text-teal-950">
          <Lettering text={"Sign In"} fontSize={30} />
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
        <div className="mt-2">
          <PrimaryButton text={"Login"} size={"large"} type={"submit"} />
        </div>
        <div className="mt-5">
          <Link to="/sign-up">
            <TertiaryButton text={"Don't have an account? Sign up"} />
          </Link>
        </div>
      </div>
    </form>
  );
};
