import google from "../components/assets/google.png";
import logo from "../components/assets/logo.png";
import microsoft from "../components/assets/microsoft.png";
import side_logo from "../components/assets/side_logo.png";
import { LogIn } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Login = ({
  setIsLoggedIn,
}: {
  setIsLoggedIn: (isLoggedIn: boolean) => void;
}) => {
  const navigate = useNavigate();
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoggedIn(true);
    navigate("/overview");
  };
  return (
    <div className="flex h-screen">
      <div
        className="w-[35%] bg-cover bg-center"
        style={{ backgroundImage: `url(${side_logo})` }}
      ></div>
      <div className="w-[65%] bg-white p-12 px-52 flex flex-col justify-center">
        <img src={logo} alt="Britam Logo" className="h-12 w-14 mb-8" />
        <h1 className="text-3xl font-bold mb-2">WELCOME TO BRITAM</h1>
        <p className="text-gray-600 mb-8">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>

        <form className="space-y-4" onSubmit={handleLogin}>
          <div className="border-l-4 border-blue-500 pl-2 bg-white shadow">
            <label
              htmlFor="email"
              className="block text-xs font-medium text-gray-700 px-2"
            >
              EMAIL
            </label>
            <input
              type="email"
              id="email"
              name="email"
              defaultValue="marksmit@gmail.com"
              className=" block w-full  outline-none p-2"
            />
          </div>
          <div className="flex justify-between items-center border-l-4 border-blue-500 pl-2 bg-white shadow pr-2">
            <div className="w-3/4">
              <label
                htmlFor="password"
                className="block text-xs font-medium text-gray-700"
              >
                PASSWORD
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className=" block w-full  outline-none p-2"
              />
            </div>
            <a href="#" className="text-[#000000] text-sm">
              FORGET?
            </a>
          </div>
          <button
            type="submit"
            className="w-fit ml-auto  text-[#0078BE] py-2 px-4 rounded flex items-center justify-center"
          >
            LOGIN{" "}
            <span className="ml-2">
              <LogIn />
            </span>
          </button>
        </form>

        <div className="mt-8 flex space-x-4">
          <button className="flex items-center rounded px-4 py-2 bg-white shadow">
            <img src={microsoft} alt="Microsoft" className="h-5 mr-2" />
            Log in with Microsoft
          </button>
          <button className="flex items-center rounded px-4 py-2 bg-white shadow">
            <img src={google} alt="Google" className="h-5 mr-2" />
            Log in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
