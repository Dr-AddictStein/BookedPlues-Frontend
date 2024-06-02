import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Blogs from "../Pages/Blogs/Blogs";
import BlogDetails from "../Pages/BlogDetails/BlogDetails";
import Dashboard from "../Pages/Dashboard/Dashboard";
import AddBlog from "../Components/AddBlog/AddBlog";
import UpdateBlog from "../Components/UpdateBlog/UpdateBlog";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/blogdetails/:blog_id",
        element: <BlogDetails />,
      },
      {
        path: "/addblog",
        element: <AddBlog />,
      },
      {
        path: "/updateblog",
        element: <UpdateBlog />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);
