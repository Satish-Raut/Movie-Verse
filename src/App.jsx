import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About } from "./Pages/About";
import { Contact, contactdata } from "./Pages/Contact";
import { Movies } from "./Pages/Movies";
import { Home } from "./Pages/Home";
import AppLayout from "./Components/Layout/AppLayout.jsx";
import './App.css'
import { ErrorPage } from "./Pages/ErrorPage.jsx";
import { GetMoviedata } from "./api/GetAPIdata.jsx";
import { MoviesDetails } from "./Components/UI/MoviesDetails.jsx";
import { getMovieDetails } from "./api/GetMovieDetails.jsx";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement:<ErrorPage/>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/movies",
          element: <Movies />,
          loader: GetMoviedata,
        },
        {
          path: "/movies/:movieID",
          element: <MoviesDetails />,
          loader: getMovieDetails,
        },
        {
          path: "/contact",
          element: <Contact />,
          action: contactdata,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
