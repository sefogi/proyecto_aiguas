import { createBrowserRouter } from "react-router-dom";
import {Layout}  from "../components/Layout"
import { Home } from "../pages/Home";

type Props = {}

export const Router =  createBrowserRouter ([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },










]
  }
])

