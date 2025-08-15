import { NavLink } from "react-router-dom";
import { BiSolidCameraMovie } from "react-icons/bi";

export const Home = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center text-white overflow-hidden mx-9">

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t border-none from-[#2F3236] via-transparent to-[#2F3236]"></div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 animate-slideUp text-[#F2F2F2] drop-shadow-lg">
          Welcome to <span className="text-[#2F3236] flex flex-row gap-4 items-center justify-center">MovieVerse <BiSolidCameraMovie className="bounce-slow"/></span> 
        </h1>
        <p className="text-lg text-[#F2F2F2] mb-6 animate-fadeIn drop-shadow-md">
          Discover trending movies, top-rated classics, and upcoming releases all in one place.
        </p>
        <NavLink
          to="/movies"
        className="px-6 py-3 bg-[#2F3236] hover:bg-[#1F2022] text-lg rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer">
          Explore Now
        </NavLink>
      </div>
    </section>
  );
};
