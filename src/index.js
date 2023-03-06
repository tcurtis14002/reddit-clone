import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

const router = createBrowserRouter(createRoutesFromElement(
  <Route path='/' element={<Root />}>
    <Route path='' element={<Header />} />
    <Route path='' element={<SideBar />} />
    <Route path='' element={<Feed />}>
      <Route
    </Route>
  </Route>
));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
