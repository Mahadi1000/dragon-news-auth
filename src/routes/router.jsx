import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";
// import NewsDetails from "../Pages/NewsDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/category/:id",
        element: <CategoryNews></CategoryNews>,
      },
      {
        path: "/news-details/:id",
        element: <NewsDetails></NewsDetails>,
      },
    ],
  },
 
]);

export default router;
