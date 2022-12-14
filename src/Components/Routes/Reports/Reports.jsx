import React from "react";
import ReportItem from "./ReportItem/ReportItem";
import { useState } from "react";

import imgWood from "../../../images/Journey/wood1.jpg";
import imgReport1 from "../../../images/Report/report1.jpg"
import imgReport2 from "../../../images/Report/report2.jpg"

import imgVertical from "../../../images/Report/verticalDots.png";
import imgHorizontal from "../../../images/Report/horizontalDots.png";
import Dots from "./Dots/Dots";

export default function Reports() {
  const [width, setWidth] = useState(false);

  return (
    <main
      className={`flex flex-col items-center justify-center  ${
        width ? "px-[15vw]" : "px-[15vw]"
      } py-[8rem] max-[1024px]:py-[6rem] max-[768px]:py-[4rem] w-full h-full bg-[#080a29]`}
    >
      <article className="flex items-baseline mb-7">
        <h2 className="text-4xl max-[1024px]:text-2xl max-[768px]:text-xl mr-2 max-[1024px]:mr-1 max-[768px]:mr-[2px] text-white">Our Reports</h2>
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
            ? " [&>*]:w-full [&>*]:h-[70vw]"
            : " [&>*]:w-[33.3333333333333333333333333333333333333%] [&>*]:h-[30vw]"
        } bg-white`}
      >
        <ReportItem  setWidth={setWidth} src={imgWood} alt="wood" />
        <ReportItem setWidth={setWidth} src={imgReport1} alt="van" />
        <ReportItem setWidth={setWidth} src={imgWood} alt="wood" />
        <ReportItem setWidth={setWidth} src={imgReport2} alt="van2" />
        <ReportItem setWidth={setWidth} src={imgWood} alt="wood" />
        <ReportItem setWidth={setWidth} src={imgWood} alt="wood" />
        <ReportItem setWidth={setWidth} src={imgWood} alt="wood" />
        <ReportItem setWidth={setWidth} src={imgWood} alt="wood" />
        <ReportItem setWidth={setWidth} src={imgReport1} alt="van" />
        <ReportItem setWidth={setWidth} src={imgWood} alt="wood" />
        <ReportItem setWidth={setWidth} src={imgReport2} alt="van2" />
        <ReportItem setWidth={setWidth} src={imgWood} alt="wood" />
        <ReportItem setWidth={setWidth} src={imgWood} alt="wood" />
        <ReportItem setWidth={setWidth} src={imgWood} alt="wood" />
      </section>
    </main>
  );
}
