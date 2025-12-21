import { createBrowserRouter } from "react-router";
import Root from "../Components/Root";
import Home from "../Layout/Home/Home";
import AppsList from "../Layout/AppsList/AppsList";
import AppDetails from "../Components/Apps/AppDetails";


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
        }


    ]
  },
  
]);