import { Outlet } from "react-router-dom";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";

export const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between px-8 py-4">
        <h1
          className="text-2xl font-bold cursor-pointer"
          onClick={() => navigate("/")}
        >
          AI Doc Assistant
        </h1>

        <div className="flex gap-4">
          <Button btnName={"Login"} navigateTo={"/login"} />
          <Button btnName={"Sign Up"} navigateTo={"/signUp"} />
        </div>
      </div>

      <Outlet />
    </div>
  );
};
