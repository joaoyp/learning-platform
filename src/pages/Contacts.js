import { useEffect, useState } from "react";
import { Lettering } from "../components/common/Lettering";
import { TextField, TextareaAutosize } from "@mui/material";
import { PrimaryButton } from "../components/common/PrimaryButton";
import { Link } from "react-router-dom";

export const Contacts = () => {
  useEffect(() => {
    document.title = "Contacts | Learning Platform";
  }, []);

  return (
    <>
      <div className="flex justify-center p-10">
        <div className="bg-contactImage bg-top w-full h-[80vh] bg-cover"></div>
        <div className="w-full relative">
          <div className="flex justify-center absolute w-full mt-20 max-lg:mt-0">
            <Lettering text={"Contact Us"} fontSize={45} />
          </div>
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
                    value={""}
                    onChange={() => {}}
                  />
                </div>
                <div className="w-full">
                  <TextField
                    required
                    fullWidth
                    type="text"
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    value={""}
                    onChange={() => {}}
                  />
                </div>
              </div>

              <div className="w-9/12">
                <TextField
                  required
                  fullWidth
                  type="email"
                  id="email"
                  label="Email"
                  name="email"
                  value={""}
                  onChange={() => {}}
                />
              </div>
              <div className="w-9/12">
                <TextField
                  minRows={10}
                  multiline
                  fullWidth
                  type="text"
                  id="message"
                  label="Message"
                  name="message"
                  value={""}
                  onChange={() => {}}
                />
              </div>
              <div className="mt-2">
                <PrimaryButton text={"Send"} type={"submit"} />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
