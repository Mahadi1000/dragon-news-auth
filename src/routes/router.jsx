import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
    // import CategoryNews from "../pages/CategoryNews";
    // import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
    //   {
    //     path: "",
    //     element: <Home></Home>,
    //   },
    //   {
    //     path: "/category/:id",
    //     element: <CategoryNews></CategoryNews>,
    //   },
    ],
  },
 
]);

export default router;
