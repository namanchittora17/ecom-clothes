import { NavLink } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
const Header = () => {
  return (
    <>
      <div>
        <header
          style={{ backgroundColor: "#b6ad8e" }}
          className="flex justify-between items-center px-8 py-6 border-b bg-white shadow-sm sticky top-0 z-50"
        >
          <h1 className="text-3xl font-bold font-serif">Heir &amp; Heritage</h1>
          <nav className="space-y-2 peer-checked:flex flex-col absolute left-0 top-16 bg-white w-full px-6 py-4 shadow-md sm:flex sm:flex-col lg:static lg:flex lg:flex-row lg:space-x-6 lg:space-y-0 lg:w-auto hidden text-sm font-medium rounded-lg uppercase ">
            <NavLink to="/Home" className="hover:text-gray-500 block">
              Home
            </NavLink>
            <NavLink to="/Shop" className="hover:text-gray-500 block">
              Shop
            </NavLink>
            <NavLink to="/About" className="hover:text-gray-500 block">
              About
            </NavLink>
            <NavLink to="/Contact" className="hover:text-gray-500 block">
              Contact
            </NavLink>
            <NavLink to="/Cart" className="hover:text-gray-500 block">
            <ShoppingCart size={22} />
            </NavLink>
          </nav>
        </header>
      </div>
    </>
  );
};
export default Header;
