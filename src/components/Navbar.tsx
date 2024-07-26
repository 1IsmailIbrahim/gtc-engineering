import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      closeMenu();
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMenuOpen]);

  return (
    <div className="mx-auto max-w-[1920px] relative flex justify-between items-center py-5 px-8 md:px-[135px]">
      <img
        className="w-[150px] md:w-[205px] h-auto md:h-[87px]"
        src="/src/assets/logo.png"
        alt="Logo"
      />
      <button
        className="block xl:hidden text-black text-xl z-50"
        onClick={toggleMenu}
      >
        {isMenuOpen ? <X className="text-white" /> : <Menu />}
      </button>
      <ul
        className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex flex-col gap-4 items-center justify-center font-bold transform ${
          isMenuOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0"
        } transition-transform duration-300 ease-in-out z-40 xl:relative xl:flex xl:flex-row 2xl:gap-8 xl:items-center xl:bg-transparent xl:opacity-100 xl:translate-x-0 xl:transition-none xl:h-auto xl:w-auto xl:top-auto xl:left-auto`}
      >
        <li className="duration-200 py-2 px-3 xl:py-8 xl:px-6 text-white xl:text-black">
          <NavLink to="/" onClick={closeMenu}>
            HOME
          </NavLink>
        </li>
        <li className="duration-200 py-2 px-3 xl:py-8 xl:px-6 text-white xl:text-black">
          <NavLink to="/products" onClick={closeMenu}>
            PRODUCTS
          </NavLink>
        </li>
        <li className="duration-200 py-2 px-3 xl:py-8 xl:px-6 text-white xl:text-black">
          <NavLink to="/videos" onClick={closeMenu}>
            VIDEOS
          </NavLink>
        </li>
        <li className="duration-200 py-2 px-3 xl:py-8 xl:px-6 text-white xl:text-black">
          <NavLink to="/news" onClick={closeMenu}>
            LLFA ®️ News
          </NavLink>
        </li>
        <li className="duration-200 py-2 px-3 xl:py-8 xl:px-6 text-white xl:text-black">
          <NavLink to="/documents" onClick={closeMenu}>
            MULTI-LANGUAGE PDF DOCUMENTS
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
