import Image from "next/image";
import React from "react";
import ColorLogo from "/public/images/logo/WeGiftEducationLogo.svg";
import Link from "next/link";

interface LogoComponentProps {
  className?: string;
}

const LogoComponent: React.FC<LogoComponentProps> = ({ className }) => {
  return (
    <Image
      src={ColorLogo}
      alt="WeGift Education Logo"
      className={`w-full object-contain ${className}`}
    />
  );
};

export default LogoComponent;
