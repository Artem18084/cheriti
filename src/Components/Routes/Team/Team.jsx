import React from "react";
import PersonCArd from "./PersonCard/PersonCArd";
import imgArtem from "../../../images/Team/Artem.jpg";
import imgAmalia from "../../../images/Team/Amalia.jpg";
import imgAndriy from "../../../images/Team/Andriy.jpg";
import imgYana from "../../../images/Team/Yana.JPG"
import imgVadim from "../../../images/Team/Vadim.jpg"
import imgJulia from "../../../images/Team/Julia.jpg"
import imgIllya from "../../../images/Team/Iliya.jpg"
import imgVika from "../../../images/Team/Vika.jpg"
import imgAngelina from "../../../images/Team/Angelina.JPG"
import imgAlyona  from "../../../images/Team/Alyona.JPG"

export default function Team() {
  const team = {
    "Artem Kosharnyi": {
      key: 1,
      name: "Artem Kosharniy",
      inst: "https://www.instagram.com/4rtemk0/",
      facebook: "https://www.facebook.com/artem.kosharnyi/",
      gmail: "mailto:artemkosharnyi@gmail.com",
      telegram: "https://telegram.me/Artem18084",
    },
    "Amalia Vardanian": {
      key: 2,
      name: "Amalia Vardanian",
      inst: "https://www.instagram.com/maliia_vard/",
      facebook: "",
      gmail: "",
      telegram: "",
    },
    "Andriy Yablonskii": {
      key: 3,
      name: "Andriy Yablonskii",
      inst: "",
      facebook: "",
      gmail: "",
      telegram: "",
    },
    "Yana Kravchenko": {
      key: 4,
      name: "Yana Kravchenko",
      inst: "",
      facebook: "",
      gmail: "",
      telegram: "",
    },
    "Vadim Kravchenko": {
      key: 5,
      name: "Vadim Kravchenko",
      inst: "",
      facebook: "",
      gmail: "",
      telegram: "",
    },
    "Julia Badya": {
      key: 6,
      name: "Julia Badya",
      inst: "",
      facebook: "",
      gmail: "",
      telegram: "",
    },
    "Iliya Rochev": {
      key: 7,
      name: "Ilia Rochev",
      inst: "",
      facebook: "",
      gmail: "",
      telegram: "",
    },
    "Vika Lemberg": {
      key: 8,
      name: "Vika Lemberg",
      inst: "",
      facebook: "",
      gmail: "",
      telegram: "",
    },
    "Angelina Vardanian": {
      key: 9,
      name: "Angelina Vardanian",
      inst: "https://www.instagram.com/e.n.j_v.a.r.d_/",
      facebook: "",
      gmail: "",
      telegram: "",
    },
    "Alyona Snigur": {
      key: 10,
      name: "Alyona Snigur",
      inst: "https://www.instagram.com/4rtemk0/",
      facebook: "https://www.facebook.com/artem.kosharnyi/",
      gmail: "mailto:artemkosharnyi@gmail.com",
      telegram: "https://telegram.me/Artem18084",
    },
  };
  return (
    <main className="flex flex-col items-center justify-center py-[8rem] max-[1024px]:py-[6rem]   max-[768px]:py-[4rem]  px-[5vw] w-full h-full bg-[#080a29]">
      <h2 className=" text-4xl max-[1024px]:text-2xl max-[768px]:text-xl text-white">Our Team</h2>
      <section className="flex flex-wrap   w-full [&>*]:mr-[5%]  max-[768px]:[&>*]:mr-[3.3333333333333333333333333333333%] [&>*]:mb-[5%] max-[768px]:[&>*]:mb-[3.3333333333333333333333333333333%] pt-[5%] max-[768px]:[&>*]:pt-[3.3333333333333333333333333333333%] pl-[5%] max-[768px]:[&>*]:pl-[3.3333333333333333333333333333333%]">
        <PersonCArd
          src={imgArtem}
          alt="Me"
          key={team["Artem Kosharnyi"].key}
          name={team["Artem Kosharnyi"].name}
          instagram={team["Artem Kosharnyi"].inst}
          facebook={team["Artem Kosharnyi"].facebook}
          gmail={team["Artem Kosharnyi"].gmail}
          telegram={team["Artem Kosharnyi"].telegram}
        />
        <PersonCArd
          src={imgAmalia}
          alt="Amalia"
          key={team["Amalia Vardanian"].key}
          name={team["Amalia Vardanian"].name}
          instagram={team["Amalia Vardanian"].inst}
          facebook={team["Amalia Vardanian"].facebook}
          gmail={team["Amalia Vardanian"].gmail}
          telegram={team["Amalia Vardanian"].telegram}
        />
        <PersonCArd
          src={imgAndriy}
          alt="Andriy"
          key={team["Andriy Yablonskii"].key}
          name={team["Andriy Yablonskii"].name}
          instagram={team["Andriy Yablonskii"].inst}
          facebook={team["Andriy Yablonskii"].facebook}
          gmail={team["Andriy Yablonskii"].gmail}
          telegram={team["Andriy Yablonskii"].telegram}
        />
         <PersonCArd
          src={imgYana}
          alt="Yana"
          key={team["Yana Kravchenko"].key}
          name={team["Yana Kravchenko"].name}
          instagram={team["Yana Kravchenko"].inst}
          facebook={team["Yana Kravchenko"].facebook}
          gmail={team["Yana Kravchenko"].gmail}
          telegram={team["Yana Kravchenko"].telegram}
        />
          <PersonCArd
          src={imgVadim}
          alt="Vadim"
          key={team["Vadim Kravchenko"].key}
          name={team["Vadim Kravchenko"].name}
          instagram={team["Vadim Kravchenko"].inst}
          facebook={team["Vadim Kravchenko"].facebook}
          gmail={team["Vadim Kravchenko"].gmail}
          telegram={team["Vadim Kravchenko"].telegram}
        />
         <PersonCArd
          src={imgJulia}
          alt="Julia"
          key={team["Julia Badya"].key}
          name={team["Julia Badya"].name}
          instagram={team["Julia Badya"].inst}
          facebook={team["Julia Badya"].facebook}
          gmail={team["Julia Badya"].gmail}
          telegram={team["Julia Badya"].telegram}
        />
         <PersonCArd
          src={imgIllya}
          alt="Iliya"
          key={team["Iliya Rochev"].key}
          name={team["Iliya Rochev"].name}
          instagram={team["Iliya Rochev"].inst}
          facebook={team["Iliya Rochev"].facebook}
          gmail={team["Iliya Rochev"].gmail}
          telegram={team["Iliya Rochev"].telegram}
        />
          <PersonCArd
          src={imgVika}
          alt="Vika"
          key={team["Vika Lemberg"].key}
          name={team["Vika Lemberg"].name}
          instagram={team["Vika Lemberg"].inst}
          facebook={team["Vika Lemberg"].facebook}
          gmail={team["Vika Lemberg"].gmail}
          telegram={team["Vika Lemberg"].telegram}
        />
        <PersonCArd
          src={imgAngelina}
          alt="Amalia"
          key={team["Angelina Vardanian"].key}
          name={team["Angelina Vardanian"].name}
          instagram={team["Angelina Vardanian"].inst}
          facebook={team["Angelina Vardanian"].facebook}
          gmail={team["Angelina Vardanian"].gmail}
          telegram={team["Angelina Vardanian"].telegram}
        />
         <PersonCArd
          src={imgAlyona}
          alt="Amalia"
          key={team["Alyona Snigur"].key}
          name={team["Alyona Snigur"].name}
          instagram={team["Alyona Snigur"].inst}
          facebook={team["Alyona Snigur"].facebook}
          gmail={team["Alyona Snigur"].gmail}
          telegram={team["Alyona Snigur"].telegram}
        />
      </section>
    </main>
  );
}
