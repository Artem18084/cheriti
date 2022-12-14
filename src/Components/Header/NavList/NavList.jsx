import React, { useState } from "react";
import ListItem from "./ListItem/ListItem";
import { Link } from "react-router-dom";

export default function NavList(props) {
  const [home, setHome] = useState(false);
  const [report, setReport] = useState(false);
  const [needs, setNeeds] = useState(false);
  const [team, setTeam] = useState(false);
  const [donate, setDonate] = useState(false);
  const homeActive = () => {
    setHome(true);
    setReport(false);
    setNeeds(false);
    setTeam(false);
    setDonate(false);
  };
  const reportActive = () => {
    setHome(false);
    setReport(true);
    setNeeds(false);
    setTeam(false);
    setDonate(false);
  };
  const needsActive = () => {
    setHome(false);
    setReport(false);
    setNeeds(true);
    setTeam(false);
    setDonate(false);
  };
  const teamActive = () => {
    setHome(false);
    setReport(false);
    setNeeds(false);
    setTeam(true);
    setDonate(false);
  };
  const donateActive = () => {
    setHome(false);
    setReport(false);
    setNeeds(false);
    setTeam(false);
    setDonate(true);
  };
  const navList = {
    main: "Home",
    report: "Report",
    needs: "Needs",
    team: "Team",
    donate: "Donate",
  };
  return (
    <ul  className={`flex ${props.flexSidebar} ${props.marginTop}   max-[1024px]:[&>*]:ml-[4vw]  max-[1280px]:[&>*]:ml-[6vw] [&>*]:ml-[8vw] [&>*]:cursor-pointer [&>*]:duration-700 items-center relative `}>
      <Link to="/">
        <ListItem  setToggleMenu ={props.setToggleMenu}
          tittle={navList.main}
          id={navList.main}
          state={home}
          setState={homeActive}
        />
      </Link>

      <Link to="/Reports">
        <ListItem setToggleMenu ={props.setToggleMenu}
          tittle={navList.report}
          id={navList.report}
          state={report}
          setState={reportActive}
        />
      </Link>

      <Link to="/Needs">
        <ListItem setToggleMenu ={props.setToggleMenu}
          tittle={navList.needs}
          id={navList.needs}
          state={needs}
          setState={needsActive}
        />
      </Link>

      <Link to="/Team">
        <ListItem setToggleMenu ={props.setToggleMenu}
          tittle={navList.team}
          id={navList.team}
          state={team}
          setState={teamActive}
        />
      </Link>
      <Link to="/Donate">
        <ListItem setToggleMenu ={props.setToggleMenu}
          tittle={navList.donate}
          id={navList.donate}
          state={donate}
          setState={donateActive}
        />
      </Link>
    </ul>
  );
}
