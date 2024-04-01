// react router
import { createBrowserRouter } from "react-router-dom";

// styles

// page components
import App from "../App";
import Home from "../pages/home/Home";
import Create from "../pages/create/Create";
import Search from "../pages/search/Search";
import Recipe from "../pages/recipe/Recipe";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/create",
        element: <Create></Create>,
      },
      {
        path: "/search",
        element: <Search></Search>,
      },
      {
        path: "/recipes/:id",
        element: <Recipe></Recipe>,
      },
    ],
  },
]);
