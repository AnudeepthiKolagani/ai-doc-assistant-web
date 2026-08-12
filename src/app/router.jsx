import { createBrowserRouter } from "react-router-dom";
import { LandingPage } from "../pages/LandingPage";
import { LoginPage } from "../features/auth/pages/LoginPage";
import { SignUpPage } from "../features/auth/pages/SignUpPage";
import { HomePage } from "../pages/HomePage";
import { WorkSpacesPage } from "../features/workspaces/pages/WorkSpacesPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/signUp",
        element: <SignUpPage />,
      },
    ],
  },
  {
    path: "/workspaces",
    element: <WorkSpacesPage />,
  },
]);
