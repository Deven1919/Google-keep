import React from "react";
import { key } from "../Regex";
import { NavLink } from "react-router-dom";
export default function AuthRouter({ children }) {
  const token = localStorage.getItem(key);
  if (token) {
    return children;
  }
  return <NavLink to="/" />; //  Redirect to login page.
}
