import { useEffect, useState } from "react";
import axios from "axios";
import { PrimaryButton } from "../../common/PrimaryButton";
import { SecondaryButton } from "../../common/SecondaryButton";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="flex justify-between text-xl">
      <ul className="flex justify-between items-center gap-8">
        <li className="hover:text-teal-700">
          <NavLink to="/courses">Courses</NavLink>
        </li>
        <li className="hover:text-dark-700">
          <NavLink to="/about">About Us</NavLink>
        </li>
        <li className="hover:text-dark-700">
          <NavLink to="/contacts">Contacts</NavLink>
        </li>
      </ul>
    </nav>
  );
};
