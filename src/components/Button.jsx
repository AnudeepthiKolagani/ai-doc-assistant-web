import { useNavigate } from "react-router-dom";

export const Button = ({ btnName, navigateTo }) => {
  const navigate = useNavigate();

  return (
    <button
      className="rounded-lg px-4 py-0.5 hover:cursor-pointer hover:bg-black hover:text-white"
      onClick={()=>navigate(navigateTo)}
    >
      {btnName}
    </button>
  );
};
