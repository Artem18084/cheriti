import React from "react";

export default function Header() {
  return (
    <header className=" flex justify-between w-full h-auto bg-indigo-900 ">
      <ul className=" flex">
        <li>Report</li>
        <li>Needs</li>
        <li>Team</li>
        <li>Donate</li>
      </ul>
      <figure className=" flex">
        <figcaption> Name of organization</figcaption>
        <img/>
      </figure>
      
    </header>
  );
}
