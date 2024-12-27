import Image from "next/image";
import React from "react";
import BlackLogo from "/public/images/logo/WegiftEduBlack.png";

interface LogoComponentProps {
  className?: string;
}

const LogoComponent: React.FC<LogoComponentProps> = ({ className }) => {
  return (
    <Image
      src={BlackLogo}
      alt="Edu gift logo"
      className={`h-[40px] w-full object-contain ${className}`}
      priority
    />
  );
};

export default LogoComponent;
