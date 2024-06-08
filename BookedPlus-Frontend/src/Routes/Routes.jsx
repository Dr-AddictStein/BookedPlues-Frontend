import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Blogs from "../Pages/Blogs/Blogs";
import BlogDetails from "../Pages/BlogDetails/BlogDetails";
import Dashboard from "../Pages/Dashboard/Dashboard";
import AddBlog from "../Components/AddBlog/AddBlog";
import UpdateBlog from "../Components/UpdateBlog/UpdateBlog";
import PrivateRoute from "./privateRoutes";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import ForgotPassword from "../Pages/ForgotPassword";
import ResetPassword from "../Pages/ResetPassword";

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
        path: "/665bc136ca6d454ec0f5eed5",
        element: <PrivateRoute element={<Dashboard />} />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/665d7c66148427685bf468df",
        element: <ResetPassword />,
      },
      {
        path: "/forgotPassword",
        element: <ForgotPassword />,
      },
    ],
  },
]);
