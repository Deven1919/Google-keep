import React from "react";
import { key } from "../Regex";
import {
  Navigate,
  redirect,
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Login from "../pages/Login";
export default function AuthRouter({ children }) {
  const navigate = useNavigate();
  const token = localStorage.getItem(key);
  console.log(token);
  if (token) {
    return children;
  } else {
    return <Navigate to="/" replace="true" />;
  }

  //  Redirect to login page.
}
