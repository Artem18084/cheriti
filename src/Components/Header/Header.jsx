import React, { useState } from "react";

import NavLinkOrg from "./NavLinkORG/NavLinkOrg";
import NavList from "./NavList/NavList";
import imgActiveMenu from "../../images/header/activeMenu.png";
import imgPasiveMenu from "../../images/header/pasiveMenu.png";
export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className="fixed flex justify-between items-center z-10 top-0 right-0  w-full h-auto bg-[#010321] text-white py-4 px-8 max-[768px]:py-2 max-[768px]:px-4">
      
      <nav className=" max-[768px]:hidden ">
        <NavList />
      </nav>
      <NavLinkOrg />

      <img
        className=" min-[769px]:hidden  w-4 h-4"
        onClick={() => setToggleMenu(!toggleMenu)}
        src={!toggleMenu ? imgPasiveMenu : imgActiveMenu}
        alt="toggleMenu"
      />
    </header>
  );
}
