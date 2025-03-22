// AppRouter.tsx
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layouts/Mainlayout/Mainlayout";
import SignUp from "../Pages/Signup";
import Posts from "../Pages/Posts";
import CreatePost from "../Pages/CreatePost";
import PostDetails from "../Pages/PostDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <SignUp /> },
      { path : "posts", element: <Posts/>},
      { path: "create-post", element: <CreatePost/>},
      { path: "posts/:id", element: <PostDetails/>} 
    ],
  },
]);

const AppRouter: React.FC = () => <RouterProvider router={router} />;

export default AppRouter;