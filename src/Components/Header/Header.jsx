import React from "react";


import NavLinkOrg from "./NavLinkORG/NavLinkOrg";
import NavList from "./NavList/NavList";

export default function Header() {
  return (
    <header className=" flex justify-between fixed top-0 right-0  w-full h-auto bg-[#010321] text-white py-4 px-8">
     <NavList/>
     <NavLinkOrg/>
    </header>
  );
}
