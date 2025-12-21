import { createBrowserRouter } from "react-router";
import Root from "../Components/Root";
import Home from "../Layout/Home/Home";
import AppsList from "../Layout/AppsList/AppsList";
import AppDetails from "../Components/Apps/AppDetails";
import Installation from "../Layout/Installation/Installation";
import ErrorPage from "../Layout/ErrorPage/ErrorPage";


export const router = createBrowserRouter([
  {
    path: "/",
    
    Component: Root,
    
    children: [
        {
            index: true,
            Component: Home
        },
        {
          path: '/Apps',
          Component: AppsList
        },
        {
          path: '/AppDetails/:id',
          Component: AppDetails
        },
        {
          path: '/Installation',
          Component: Installation
        },
        {
          path: '*',
          Component: ErrorPage
        }


    ]
  },
  
]);