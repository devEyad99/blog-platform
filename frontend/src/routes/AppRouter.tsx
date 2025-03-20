// AppRouter.tsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layouts/Mainlayout/Mainlayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import SignUp from "../Pages/Signup";
import Posts from "../Pages/Posts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <SignUp /> },
      { path : "posts", element: <Posts/>}
    ],
  },
]);

const AppRouter: React.FC = () => <RouterProvider router={router} />;

export default AppRouter;