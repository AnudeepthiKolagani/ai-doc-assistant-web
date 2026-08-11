import "./App.css";
import LoginPage from "./features/auth/pages/LoginPage";
// import { LadingPage } from "./pages/LandingPage";

function App() {
  return (
    <div className="w-full h-screen px-20 mt-5">
      {/* <LadingPage /> */}
      <LoginPage />
    </div>
  );
}

export default App;
