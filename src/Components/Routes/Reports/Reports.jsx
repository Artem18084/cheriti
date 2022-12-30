import React from "react";
import ReportItem from "./ReportItem/ReportItem";
import { useState } from "react";

import imgWood from "../../../images/Journey/wood1.jpg";
import imgReport1 from "../../../images/Report/report1.jpg";
import imgReport2 from "../../../images/Report/report2.jpg";
import imgReport3 from "../../../images/Report/report3.jpg";
import imgReport4 from "../../../images/Report/report4.jpg";
import imgReport5 from "../../../images/Report/report5.jpg";
import imgReport6 from "../../../images/Report/report6.jpg";
import imgReport7 from "../../../images/Report/report7.jpg";
import imgReport8 from "../../../images/Report/report8.jpg";
import imgReport9 from "../../../images/Report/report9.jpg";
import imgReport10 from "../../../images/Report/report10.jpg";
import imgReport11 from "../../../images/Report/report11.jpg";
import imgReport12 from "../../../images/Report/report12.jpg";
import imgReport13 from "../../../images/Report/report13.jpg";
import imgReport14 from "../../../images/Report/report14.jpg";
import imgReport15 from "../../../images/Report/report15.jpg";
import imgReport16 from "../../../images/Report/report16.jpg";
import imgReport17 from "../../../images/Report/report17.jpg";
import imgReport18 from "../../../images/Report/report18.jpg";
import imgReport19 from "../../../images/Report/report19.jpg";
import imgReport20 from "../../../images/Report/report20.JPG";
import imgReport21 from "../../../images/Report/report21.JPG";
import imgReport22 from "../../../images/Report/report22.JPG";
import imgReport23 from "../../../images/Report/report23.JPG";
import imgReport24 from "../../../images/Report/report24.JPG";
import imgReport25 from "../../../images/Report/report25.JPG";
import imgReport26 from "../../../images/Report/report26.JPG";
import imgReport27 from "../../../images/Report/report27.JPG";
import imgReport28 from "../../../images/Report/report28.JPG";
import imgReport29 from "../../../images/Report/report29.jpg";

import imgVertical from "../../../images/Report/verticalDots.png";
import imgHorizontal from "../../../images/Report/horizontalDots.png";
import Dots from "./Dots/Dots";

export default function Reports() {
  const [width, setWidth] = useState(false);

  return (
    <main
      className={`flex flex-col items-center justify-center  ${
        width
          ? "px-[5vw] sm:px-[10vw]  md:px-[15vw] lg:px-[20vw] xl:px-[25rem]"
          : "px-[8vw]"
      } py-[8rem] max-[1024px]:py-[6rem] max-[768px]:py-[4rem] w-full h-full  bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900`}
    >
      <article className="flex items-baseline mb-7">
        <h2 className="text-4xl max-[1024px]:text-2xl max-[768px]:text-xl mr-2 max-[1024px]:mr-1 max-[768px]:mr-[2px] text-white">
          Our Reports
        </h2>
        <Dots
          click={() => setWidth(true)}
          selfClass={width ? "hidden" : ""}
          src={imgHorizontal}
          alt="horizontalDots"
          width={width}
          setWidth={setWidth}
        />
        <Dots
          click={() => setWidth(false)}
          selfClass={!width ? "hidden" : ""}
          src={imgVertical}
          alt="verticalDots"
          width={width}
          setWidth={setWidth}
        />
      </article>
      <section
        className={`flex  flex-wrap [&>*]:p-1 p-1 ${
          width
            ? " [&>*]:w-full  [&>*]:h-[55vh]  sm:[&>*]:h-[60vh] md:[&>*]:h-[70vh] lg:[&>*]:h-[80vh] xl:[&>*]:h-[90vh]"
            : " [&>*]:w-[33.3333333333333333333333333333333333333%] [&>*]:h-[30vw]"
        } bg-white`}
      >
        <ReportItem setWidth={setWidth} src={imgReport1} alt="people" />{" "}
        <ReportItem setWidth={setWidth} src={imgReport22} alt="child" />
        <ReportItem setWidth={setWidth} src={imgReport3} alt="people" />
        <ReportItem setWidth={setWidth} src={imgReport20} alt="boy" />
        <ReportItem setWidth={setWidth} src={imgReport2} alt="van2" />
        <ReportItem setWidth={setWidth} src={imgReport28} alt="girl" />
        <ReportItem setWidth={setWidth} src={imgReport4} alt="child" />
        <ReportItem setWidth={setWidth} src={imgReport5} alt="people" />
        <ReportItem setWidth={setWidth} src={imgReport9} alt="person" />
        <ReportItem setWidth={setWidth} src={imgReport8} alt="person" />
        <ReportItem setWidth={setWidth} src={imgWood} alt="wood" />
        <ReportItem setWidth={setWidth} src={imgReport10} alt="wood" />
        <ReportItem setWidth={setWidth} src={imgReport6} alt="person" />
        <ReportItem setWidth={setWidth} src={imgReport7} alt="grandmother" />
        <ReportItem setWidth={setWidth} src={imgReport11} alt="people" />
        <ReportItem setWidth={setWidth} src={imgReport12} alt="people" />
        <ReportItem setWidth={setWidth} src={imgReport13} alt="people" />
        <ReportItem setWidth={setWidth} src={imgReport14} alt="grandmother" />
        <ReportItem setWidth={setWidth} src={imgReport15} alt="girl" />
        <ReportItem setWidth={setWidth} src={imgReport16} alt="grandmother" />
        <ReportItem setWidth={setWidth} src={imgReport17} alt="people" />
        <ReportItem setWidth={setWidth} src={imgReport18} alt="people" />
        <ReportItem setWidth={setWidth} src={imgReport19} alt="food" />
        <ReportItem setWidth={setWidth} src={imgReport21} alt="boy" />
        <ReportItem setWidth={setWidth} src={imgReport29} alt="people" />
        <ReportItem setWidth={setWidth} src={imgReport23} alt="van" />
        <ReportItem setWidth={setWidth} src={imgReport24} alt="van" />
        <ReportItem setWidth={setWidth} src={imgReport25} alt="people" />
        <ReportItem setWidth={setWidth} src={imgReport26} alt="people" />
        <ReportItem setWidth={setWidth} src={imgReport27} alt="people" />
      </section>
    </main>
  );
}
