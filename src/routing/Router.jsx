import React from "react";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../component/Home";
import AuthRouter from "./AuthRouter";
import SwipeDrawer from "../component/SwipeDrawer";
import DataProvider from "../context/DataContext";
import DeleteNotes from "../component/Delete/DeleteNotes";
import ArchiveContainer from "../component/Archive/ArchiveContainer";
import DeleteContainer from "../component/Delete/DeleteContainer";
import NotesContainer from "../component/Note/NotesContainer";
export default function Router() {
  return (
    <>
      <DataProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/notes" element={<NotesContainer />} />
            <Route path="/trash" element={<DeleteContainer />} />
            <Route path="/archive" element={<ArchiveContainer />} />
            {/* <Route path="/" element={<Login />} />
            <Route
              path="dashboard"
              element={
                <AuthRouter>
                  <Home />
                </AuthRouter>
              }
            />
            <Route
              path="notes"
              element={
                <DataProvider>
                  <NotesContainer />
                </DataProvider>
              }
            />
            <Route
              path="trash"
              element={
                <DataProvider>
                  <DeleteContainer />
                </DataProvider>
              }
            /> */}
          </Routes>
        </BrowserRouter>
      </DataProvider>
    </>
  );
}

