"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SuccessModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const router = useRouter();
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[99999] grid h-screen place-content-center overflow-hidden bg-[#252422] p-4 transition-opacity">
      <div className="flex min-h-[315px] flex-col items-center justify-center gap-4 rounded-lg bg-Liver/80 p-4 md:w-[415px]">
        <svg
          width="74"
          height="63"
          viewBox="0 0 74 63"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="6" width="63" height="63" rx="31.5" fill="#3E3E3B" />
          <path
            d="M23 31L23 32C23 40.0081 29.4919 46.5 37.5 46.5C45.5081 46.5 52 40.0081 52 32V31C52 22.9919 45.5081 16.5 37.5 16.5C29.4919 16.5 23 22.9919 23 31Z"
            fill="white"
          />
          <path
            d="M37.9999 14.8333C28.8166 14.8333 21.3333 22.3166 21.3333 31.4999C21.3333 40.6833 28.8166 48.1666 37.9999 48.1666C47.1833 48.1666 54.6666 40.6833 54.6666 31.4999C54.6666 22.3166 47.1833 14.8333 37.9999 14.8333ZM45.9666 27.6666L36.5166 37.1166C36.2833 37.3499 35.9666 37.4833 35.6333 37.4833C35.2999 37.4833 34.9833 37.3499 34.7499 37.1166L30.0333 32.3999C29.5499 31.9166 29.5499 31.1166 30.0333 30.6333C30.5166 30.1499 31.3166 30.1499 31.7999 30.6333L35.6333 34.4666L44.1999 25.8999C44.6833 25.4166 45.4833 25.4166 45.9666 25.8999C46.4499 26.3833 46.4499 27.1666 45.9666 27.6666Z"
            fill="#12B76A"
          />
          <circle cx="9.14995" cy="61.4251" r="1.575" fill="#12B76A" />
          <circle cx="2.8501" cy="54.6001" r="2.625" fill="#FFE58B" />
          <circle cx="72.1499" cy="6.3001" r="1.575" fill="#FD853A" />
        </svg>
        <div className="flex flex-col items-center justify-center gap-3">
          <h2 className="text-center font-luckiestGuy text-xl font-normal">
            Success
          </h2>
          <p className="max-w-[318px] text-center font-fustat text-xs md:text-sm">
            Successfully completion of slot purchase.
          </p>
        </div>
        <button
          type="button"
          onClick={() => {
            router.back();
            onClose();
          }}
          className="min-h-7 w-full rounded-full bg-[#EB3BA8] py-3 text-sm font-medium text-white outline-none transition-all duration-300 hover:opacity-90"
        >
          Buy more
        </button>
        <Link href="/leaderboard" className="text-sm font-bold text-[#E99DCC]">
          View leaderboard
        </Link>
      </div>
    </div>
  );
};

export default SuccessModal;
