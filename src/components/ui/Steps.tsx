"use client";

import Image from "next/image";
import { useState } from "react";
import Step1 from "/public/images/step1.png";
import Step2 from "/public/images/step2.png";
import Step3 from "/public/images/step3.png";
import Step4 from "/public/images/step4.png";

const Steps: React.FC = () => {
  const [openDrop, setOpenDrop] = useState(true);

  const stepsData = [
    {
      id: "01",
      image: Step1,
      desc: "Choose from Daily, Weekly, or Monthly donation options, each with a chance to win amazing prizes! Your generosity could bring you rewards, with Daily prizes drawn twice a day!",
    },
    {
      id: "02",
      image: Step2,
      desc: "The prize pool, funded by participant donations, is shared among 10 lucky winners using a top-heavy distribution strategy. As donations grow, so does the prize pool.",
    },
    {
      id: "03",
      image: Step3,
      desc: "Donate daily in any of the options to start your streak! Stay consistent for a chance to unlock multipliers when you win and other exciting rewards.",
    },
    {
      id: "04",
      image: Step4,
      desc: "",
    },
  ];

  return (
    <div className="mt-4 max-w-[295px] space-y-3 rounded-lg bg-grey-200 px-3 pt-3">
      <button
        type="button"
        onClick={() => setOpenDrop((prev) => !prev)}
        className="flex w-full select-none items-center justify-between border-b border-[#EEEEEE] py-2 pb-3 outline-none"
      >
        <h6 className="text-base font-medium text-grey-600">Getting Started</h6>
        <svg
          className={`${openDrop ? "rotate-0" : "-rotate-180"} transition-transform duration-200`}
          width="24"
          height="12"
          viewBox="0 0 24 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_519_7824)">
            <path
              d="M17.42 9.54801L18.48 8.48701L12.703 2.70801C12.6104 2.61486 12.5004 2.54093 12.3791 2.49048C12.2579 2.44003 12.1278 2.41406 11.9965 2.41406C11.8652 2.41406 11.7352 2.44003 11.6139 2.49048C11.4927 2.54093 11.3826 2.61486 11.29 2.70801L5.51001 8.48701L6.57001 9.54701L11.995 4.12301L17.42 9.54801Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_519_7824">
              <rect
                width="12"
                height="24"
                fill="white"
                transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 24 12)"
              />
            </clipPath>
          </defs>
        </svg>
      </button>
      <div
        className={`text-dark-600 flex w-full select-none flex-col gap-4 overflow-hidden text-base font-normal transition-all duration-300 ${
          openDrop ? "max-h-[1000px] py-4" : "max-h-0"
        }`}
      >
        {stepsData.map((step, index) => (
          <div
            key={step.id}
            className="flex flex-col items-start justify-start gap-2"
          >
            <h5 className="text-base font-medium text-grey-600">
              {index + 1}.
            </h5>
            <Image src={step.image} alt={`step ${index + 1} preview image`} />
            <p className="text-sm font-normal text-grey-600">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Steps;
