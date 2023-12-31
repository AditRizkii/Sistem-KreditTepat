import React from "react";
import GetStarted from "./GetStarted";

import styles from "../style";
import { robot } from "../assets";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY} `}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[32px] text-white ss:leading-[100.8px] leading-[70px]">
            Sistem <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Penentuan</span>{" "}
          </h1>
          <div className="flex md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[32px] text-white ss:leading-[100.8px] leading-[60px] w-full">
          Pemberian Kredit.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Kami membuat sebuah sistem untuk mengecek kelayakan untuk mendapatkan
          kredit secara umum, yang hasilnya nantinya akan berupa keputusan layak
          atau tidak layak menerima kredit.
        </p>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={robot}
          alt="robot-hand"
          className="w-11/12 h-auto md:w-11/12 md:h-auto rounded-3xl relative z-[5]"
        />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      {/* <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div> */}
    </section>
  );
};

export default Hero;
