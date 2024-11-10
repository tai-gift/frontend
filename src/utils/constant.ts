import DrawIcon from "/public/svgs/drawIcon.svg";
import MoneyIcon from "/public/svgs/moneyIcon.svg";
import ReferralIcon from "/public/svgs/referralIcon.svg";
import CupIcon from "/public/svgs/cupIcon.svg";
import ProfileIcon from "/public/svgs/profileIcon.svg";

export const navLinks = [
  {
    icon: DrawIcon,
    text: "Draws",
    url: "/",
  },
  {
    icon: MoneyIcon,
    text: "Earnings",
    url: "/earnings",
  },
  {
    icon: ReferralIcon,
    text: "Referrals",
    url: "/referrals",
  },
  {
    icon: CupIcon,
    text: "Leaderboard",
    url: "/leaderboard",
  },
  {
    icon: ProfileIcon,
    text: "Profile",
    url: "/profile",
  },
];

export const tabs = ["All", "Daily", "Weekly", "Monthly"];
