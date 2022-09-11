import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "./layout/container";
import Dashboard from "./containers/Dashboard";
import Courses from "./containers/Courses";
import Score from "./containers/Score";
import Schedule from "./containers/Schedule";
import Announcement from "./containers/Announcement";

function Router() {
  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/score" element={<Score />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/announcement" element={<Announcement />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default Router;
