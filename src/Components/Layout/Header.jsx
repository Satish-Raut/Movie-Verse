import { NavLink } from "react-router-dom";
import { BiSolidCameraMovie } from "react-icons/bi";

export const Header = () => {
  return (
    <div className="mx-9 mt-0 flex flex-col items-center">
      {/* SignIn & SignUp */}
      <div className="p-2 pl-6 pr-6 flex flex-row justify-between items-center w-full bg-[#393E46] text-white">
        <p>Get the membership, 30-Day return and refund guarantee.</p>
        <div className="flex gap-6">
          <NavLink
            to={"# "}
            className="hover:text-[#FF7517] transition-colors duration-300 cursor-pointer"
          >
            SIGN IN
          </NavLink>
          <NavLink
            to={"# "}
            className="hover:text-[#FF7517] transition-colors duration-300 cursor-pointer"
          >
            SIGN UP
          </NavLink>
        </div>
      </div>

      {/* Nav bar */}
      <div className="p-2 flex flex-row justify-between items-center w-full bg-[#222831] text-white shadow-md">
        {/* logo */}
        <NavLink to={`/`}>
          <div>
            <p className="font-bold text-[#FF7517] text-lg px-4 flex flex-row gap-2 justify-center items-center cursor-pointer">
              MovieVerse <BiSolidCameraMovie className="hover-bounce-slow" />
            </p>
          </div>
        </NavLink>

        {/* Nav items */}
        <div className="flex gap-6 px-4">
          {["HOME", "ABOUT", "MOVIES", "CONTACT"].map((item) => (
            <NavLink
              to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
              key={item}
              className={({ isActive }) =>
                `relative group cursor-pointer transition-colors duration-300 ${
                  isActive ? "text-[#FF7517]" : "text-white"
                }`
              }
            >
              <span className="transition-colors duration-300 group-hover:text-[#FF7517] cursor-pointer">
                {item}
              </span>
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#FF7517] transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};
