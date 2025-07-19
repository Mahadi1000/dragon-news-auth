import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../Pages/Home";
    // import CategoryNews from "../pages/CategoryNews";
    // import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
    //   {
    //     path: "/category/:id",
    //     element: <CategoryNews></CategoryNews>,
    //   },
    ],
  },
 
]);

export default router;
