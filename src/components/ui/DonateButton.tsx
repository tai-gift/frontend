import React from "react";

const DonateButton: React.FC = () => {
  return (
    <div className="absolute bottom-[160px] left-1/2 z-10 -translate-x-1/2 transform w-[95%]">
      <button
        type="button"
        className="min-h-7 w-full rounded-full bg-[#EB3BA8] py-3 text-sm font-medium text-white outline-none transition-all duration-300 hover:opacity-90"
      >
        Donate
      </button>
    </div>
  );
};

export default DonateButton;
