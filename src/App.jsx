import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./app/router";
// import LoginPage from "./features/auth/pages/LoginPage";
// import { LadingPage } from "./pages/LandingPage";

function App() {
  return(
    <RouterProvider router={router}/>
  );
}

export default App;
