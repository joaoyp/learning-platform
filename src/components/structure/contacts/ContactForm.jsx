import { TextField } from "@mui/material";
import { PrimaryButton } from "../../common/PrimaryButton";
import { useState } from "react";

export const ContactForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <form onSubmit={() => {}}>
      <div className="flex flex-col gap-4 h-real-screen items-center justify-center">
        <div className="flex w-9/12 gap-4 justify-between">
          <div className="w-full">
            <TextField
              required
              fullWidth
              type="text"
              id="firstName"
              label="First Name"
              name="firstName"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "#008080",
                  },
                },
              }}
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </div>
          <div className="w-full">
            <TextField
              required
              fullWidth
              type="text"
              id="lastName"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "#008080",
                  },
                },
              }}
              label="Last Name"
              name="lastName"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="w-9/12">
          <TextField
            required
            fullWidth
            type="email"
            id="email"
            sx={{
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "#008080",
                },
              },
            }}
            label="Email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="w-9/12">
          <TextField
            rows={10}
            multiline
            fullWidth
            type="text"
            id="message"
            sx={{
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "#008080",
                },
              },
            }}
            label="Message"
            name="message"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
        </div>
        <div className="mt-2">
          <PrimaryButton text={"Send"} type={"submit"} />
        </div>
      </div>
    </form>
  );
};
