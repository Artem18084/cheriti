import React from "react";
import imgInst from "../../images/footer/instagram.png";
import imgFace from "../../images/footer/facebook.png";
import imgPay from "../../images/footer/payPal.png";
import imgWhatsapp from "../../images/footer/whatsapp.png";
import ContactButton from "../UI/Button/ContactButton";

export default function Footer() {
  return (
    <footer className=" w-full  flex flex-col  items-center justify-center text-white bg-[#010321] py-10 max-[768px]:py-5 ">
      <hr className="w-[75vw] h-2 mb-16 max-[768px]:mb-4 max-[1024px]:mb-8" />
      <section className="flex ">
        <ContactButton img={imgInst} alt="instagram_logo" href="https://instagram.com/forward_ukraine_minestries?igshid=MDM4ZDc5MmU=" />
        <ContactButton
          img={imgFace}
          alt="facebook_logo"
          href="https://www.facebook.com/permalink.php?story_fbid=pfbid08BG4LUrwZb2oeocUvsRkK6Q3uGG2GHAkMrgPSvkrQqqBC4Gvj49s93Tr55F4j2gEl&id=102841305701116  "
        />
        <ContactButton img={imgPay} alt="PayPal_logo" />
        <ContactButton img={imgWhatsapp} alt="whatsapp_logo" />
      </section>

      <h4 className="uppercase mb-6 max-[768px]:my-1 max-[768px]:text-xs">
        forward ukraine ministries
      </h4>
      <p className=" text-xs max-[768px]:text-[10px] max-[768px]:leading-[14px]">
        {" "}
        © ForwardUkraineMinistries 2022
      </p>
    </footer>
  );
}
