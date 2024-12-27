"use client";

import Image from "next/image";
import React, { useMemo, useState } from "react";
import TaikoIconMono from "/public/svgs/taiko-icon-mono.svg";
import { Address, formatEther } from "viem";
import { useDraw } from "@/contexts/DrawProvider";
import { useRaffle } from "@/hooks/dapp";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SlotModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const { selectedDraw } = useDraw();
  const { buyTicket } = useRaffle(selectedDraw?.address as Address);

  const [amount, setAmount] = useState("1");
  const [processing, setProcessing] = useState<boolean>();
  const [viewDetail, setViewDetail] = useState<string>();

  const toDonate = useMemo(() => {
    const price = selectedDraw?.ticketPrice ?? 0;
    return price ? parseInt(amount) * price : 0;
  }, [amount, selectedDraw?.ticketPrice]);

  const handleDecrease = () => {
    setAmount((prev) => {
      const newAmount = Math.max(1, parseInt(prev) - 1);
      return newAmount.toString();
    });
  };

  const handleIncrease = () => {
    setAmount((prev) => {
      const newAmount = Math.min(100, parseInt(prev) + 1);
      return newAmount.toString();
    });
  };

  async function handleDonate() {
    if (processing) return;

    setProcessing(true);
    try {
      const tx = await buyTicket(parseInt(amount), toDonate);
      console.log("tx", tx);
      onClose();
    } catch (e) {
      console.log(e);
    } finally {
      setProcessing(false);
    }
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999999] grid h-screen place-content-center overflow-hidden bg-grey-800 p-4 transition-opacity">
      {viewDetail ? (
        <div className="flex flex-col items-center justify-center gap-4 rounded-lg bg-white p-4 md:w-[415px]">
          <div className="flex flex-col items-center justify-center gap-1">
            <h1 className="max-w-[234px] text-center text-xl font-semibold">
              Confirm Slot
            </h1>
            <p className="max-w-[299px] text-center text-sm font-normal">
              You are about to purchase a slot from the daily draws
            </p>
          </div>
          <div className="w-full border border-[#D7D7D8] p-4">
            <div className="flex items-center justify-between border-b border-[#D7D7D8] py-3">
              <span className="text-xs font-normal text-white">Draw type</span>
              <span className="text-xs font-normal text-white">
                {selectedDraw?.type}
              </span>
            </div>
            <div className="flex items-center justify-between border-b border-[#D7D7D8] py-3">
              <span className="text-xs font-normal text-white">
                Number of slots
              </span>
              <span className="text-xs font-normal text-white">{amount}</span>
            </div>
            <div className="flex items-center justify-between border-b border-[#D7D7D8] py-3">
              <span className="text-xs font-normal text-white">You pay</span>
              <div className="flex items-center gap-2 text-xs font-normal">
                <span>You pay</span>
                <span className="text-lg font-bold">
                  {formatEther(BigInt(toDonate))}
                </span>
                <div className="flex items-center gap-2">
                  <Image src={TaikoIconMono} alt="Taiko icon mono" />
                  <span className="text-xs">taiko</span>
                </div>
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={handleDonate}
            disabled={processing}
            className="min-h-7 w-full rounded-full bg-primary py-3 text-sm font-medium text-white outline-none transition-all duration-300 hover:opacity-90 disabled:bg-opacity-60"
          >
            {processing ? "Processing..." : "Confirm"}
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-4 rounded-lg bg-white p-4 md:w-[415px]">
          <h1 className="max-w-[234px] text-center font-luckiestGuy text-xl font-normal">
            How many slots do you want?
          </h1>
          <div className="flex items-center justify-between gap-4">
            <button type="button" onClick={handleDecrease}>
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
              onChange={(e) => {
                const value = parseInt(e.target.value, 10);
                if (value >= 1 && value <= 100) {
                  setAmount(value.toString());
                }
              }}
              placeholder="1"
              className="h-[66px] w-[96px] rounded-lg border border-[#D7D7D8] bg-transparent py-2 text-center font-semibold text-5xl focus:border-primary focus:outline-none lg:text-6xl"
            />
            <button type="button" onClick={handleIncrease}>
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
          <div className="flex items-center gap-2 text-xs font-normal">
            <span>You pay</span>
            <span className="text-lg font-bold">
              {formatEther(BigInt(toDonate))}
            </span>
            <div className="flex items-center gap-2">
              <Image src={TaikoIconMono} alt="Taiko icon mono" />
              <span className="text-xs">taiko</span>
            </div>
          </div>
          <button
            type="button"
            onClick={() => {
              setViewDetail(amount);
            }}
            className="min-h-7 w-full rounded-full bg-primary py-3 text-sm font-medium text-white outline-none transition-all duration-300 hover:opacity-90"
          >
            Donate Now
          </button>
        </div>
      )}
    </div>
  );
};

export default SlotModal;
