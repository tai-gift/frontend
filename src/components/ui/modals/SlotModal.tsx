"use client";

import Image from "next/image";
import { useState } from "react";
import TaikoIconMono from "/public/svgs/taiko-icon-mono.svg";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SlotModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [amount, setAmount] = useState("1");
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[999999] grid h-screen place-content-center overflow-hidden bg-[#252422] p-4 transition-opacity"
      onClick={onClose}
    >
      <div className="flex flex-col items-center justify-center gap-4 rounded-lg bg-Liver/80 p-4 md:w-[415px]">
        <h1 className="max-w-[234px] text-center font-luckiestGuy text-xl font-normal">
          How many slots do you want?
        </h1>
        <div className="flex items-center justify-between gap-4">
          <button type="button">
            <svg
              width="16"
              height="4"
              viewBox="0 0 16 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.226094 3.5V0.331999H15.7581V3.5H0.226094Z"
                fill="white"
              />
            </svg>
          </button>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="1"
            className="h-[66px] w-[96px] rounded-lg border border-[#636363] bg-transparent py-2 text-center font-luckiestGuy text-5xl focus:border-[#EB3BA8] focus:outline-none lg:text-6xl"
          />
          <button type="button">
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.647266 11.684V8.516H20.3593V11.684H0.647266ZM12.0873 20H8.91927V0.287999H12.0873V20Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
        <p className="flex items-center gap-2 text-xs font-normal">
          <span>You pay</span>
          <span className="text-lg font-bold">{amount}</span>
          <div className="flex items-center gap-2">
            <Image src={TaikoIconMono} alt="Taiko icon mono" />
            <span className="text-xs">taiko raised</span>
          </div>
        </p>
        <button
          type="button"
          className="min-h-7 w-full rounded-full bg-[#EB3BA8] py-3 text-sm font-medium text-white outline-none transition-all duration-300 hover:opacity-90"
        >
          Buy slot
        </button>
      </div>
    </div>
  );
};

export default SlotModal;
