import React from "react";
import { stats } from "../constants";
import styles from "../style";

const Stats = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
    {stats.map((stat) => (
      <div
        key={stat.id}
        className={`flex-1 flex sm:justify-start items-center flex-row m-3 justify-center`}
      >
        <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] leading-[43px] xs:leading-[53px] text-white">
          {stat.value}
        </h4>
        <p className="font-poppins font-normal xs:text-[20px] text-[15px] leading-[21px] xs:leading-[26px] text-gradient uppercase ml-3">
          {stat.title}
        </p>
      </div>
    ))}
  </section>
);

export default Stats;
