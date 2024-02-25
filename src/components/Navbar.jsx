import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const handleLinkClick = (link) => {
    setActive(link.title);
    setToggle(false);

    // If we're not on the home page, navigate to the home page first
    if (location.pathname !== "/") {
      setTimeout(() => {
        navigate("/");
      }, 300);
      console.log("navigated to /");
      setTimeout(() => {
        const section = document.getElementById(link.id);
        section && section.scrollIntoView({ behavior: "smooth" });
        window.location.href = `/#${link.id}`;
        setActive(link.title);
      }, 300);
      navigate("/", { state: { sectionId: link.id } });

      console.log("navigated to #");
      /* window.location.href = `/#${link.id}`;
      setActive(link.title);
      section && section.scrollIntoView({ behavior: "smooth" }); */
    } else {
      // We're already on the home page, just scroll to the section
      const section = document.getElementById(link.id);
      section && section.scrollIntoView({ behavior: "smooth" });
      window.location.href = `/#${link.id}`;
      setActive(link.title);
    }
  };

  return (
    <nav
      className={`${styles.paddingX} w-full flex 
    items-center py-5 fixed top-0 z-20 
    bg-navy z-30`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-15 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursos-pointer">
            Anna Baranova
            <span className="sm:block hidden"> &#91; BIM Developer &#93;</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              }
           hover:text-white text-[18px] 
            font-medium cursor-pointer`}
              onClick={() => handleLinkClick(link)}
            >
              <button>{link.title}</button>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-28px object-contain cursos-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${!toggle ? "hidden" : "flex"} p-6 bg-navy
        absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul
              className="list-none flex justify-end justify-start flex-col
            gap-4"
            >
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  }
                font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setActive(link.title);
                    setToggle(!toggle);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
