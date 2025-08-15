import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-[#222831] text-white py-8 mx-9">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-4 md:mb-0">
            <p className="font-bold text-[#FF7517] text-lg">Movie Place</p>
            <p className="text-gray-400 mt-2">
              &copy; {new Date().getFullYear()} Movie Place. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6 text-2xl mb-4 md:mb-0">
            <a href="https://facebook.com" className="text-gray-400 hover:text-[#FF7517] transition-colors duration-300">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" className="text-gray-400 hover:text-[#FF7517] transition-colors duration-300">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" className="text-gray-400 hover:text-[#FF7517] transition-colors duration-300">
              <FaInstagram />
            </a>
          </div>

          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8 text-sm">
            <a href="#" className="text-gray-400 hover:text-[#FF7517] transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-[#FF7517] transition-colors duration-300">
              Terms of Service
            </a>
            <NavLink to={`/contact`} className="text-gray-400 hover:text-[#FF7517] transition-colors duration-300">
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};
