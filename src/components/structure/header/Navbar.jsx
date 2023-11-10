import { useEffect, useState } from "react";
import axios from "axios";
import { PrimaryButton } from "../../common/PrimaryButton";
import { SecondaryButton } from "../../common/SecondaryButton";
import { NavLink } from "react-router-dom";
import { Lettering } from "../../common/Lettering";

export const Navbar = () => {
  return (
    <nav className="flex justify-between text-xl">
      <ul className="flex justify-between items-center gap-8">
        <li className="hover:text-teal-700">
          <NavLink to="/courses">
            <Lettering text="Courses" fontSize={20} fontFamily={"bitter"} />
          </NavLink>
        </li>
        <li className="hover:text-teal-700">
          <NavLink to="/about">
            <Lettering text="About Us" fontSize={20} fontFamily={"bitter"} />
          </NavLink>
        </li>
        <li className="hover:text-teal-700">
          <NavLink to="/contacts">
            <Lettering text="Contacts" fontSize={20} fontFamily={"bitter"} />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
