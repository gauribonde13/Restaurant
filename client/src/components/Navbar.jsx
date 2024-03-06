import React, { useState } from "react";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const nav = [
    { title: 'Home', link: 'home' },
    { title: 'About', link: 'about' },
    { title: 'Reservation', link: 'reservation' },
  ];

  return (
    <>
      <nav>
        <div className="logo">
          <span>$Gauri$</span>
        </div>
        <div className="nav-links">
          {nav.map((element, index) => (
            <Link
              to={element.link}
              spy={true}
              smooth={true}
              duration={500}
              key={index}
            >
              {element.title}
            </Link>
          ))}
        </div>

        <div className={show ? "navLinks showmenu" : "navLinks"}>
          <div className="link">
             </div>
          <button className="menuBtn">OUR MENU</button>
        </div>

        

        <div className="hamburger" onClick={() => setShow(!show)}>
          <GiHamburgerMenu />
        </div>
      </nav>
    </>
  );
};

export default Navbar;

