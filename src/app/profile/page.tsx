import { Metadata } from "next";
import Image from "next/image";
import TaikoIcon from "/public/svgs/taiko-icon.svg";

export const metadata: Metadata = {
  title: "Profile Tai.Gift",
};
export default function ProfilePage() {
  return (
    <section className="space-y-4">
      <header className="no-scrollbar flex justify-center gap-4 overflow-x-scroll bg-primary text-white p-2.5 text-sm md:gap-9">
        <div className="flex shrink-0 items-center gap-2">
          <span className="flex size-[29.67px] items-center justify-center rounded-full bg-CaribbeanGreen">
            C
          </span>

          <p>@cystic deposited</p>

          <div className="flex items-center gap-0.5">
            <span className="flex size-4 items-center justify-center rounded-full bg-DimorphothecaMagenta">
              <Image src={TaikoIcon} alt="taiko icon" />
            </span>

            <p>2,000</p>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <span className="flex size-[29.67px] items-center justify-center rounded-full bg-DeepFuchsia">
            B
          </span>

          <p>@bami won</p>

          <div className="flex items-center gap-0.5">
            <span className="flex size-4 items-center justify-center rounded-full bg-DimorphothecaMagenta">
              <Image src={TaikoIcon} alt="taiko icon" />
            </span>

            <p>2,000 in daily draws</p>
          </div>
        </div>
      </header>

      <div className="space-y-4 px-4 pb-12 pt-4">
        <h1 className="font-semibold text-xl uppercase md:text-2xl">
          PROFILE
        </h1>
        <div className="bg-primary-300 flex min-h-[534px] w-full flex-col items-center justify-start space-y-3 rounded-lg p-4">
          <div className="flex items-center justify-center gap-2">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.875 11.3666V12.2C17.875 12.425 17.7 12.6083 17.4667 12.6166H16.25C15.8084 12.6166 15.4084 12.2916 15.375 11.8583C15.35 11.6 15.45 11.3583 15.6167 11.1916C15.7667 11.0333 15.975 10.95 16.2 10.95H17.4584C17.7 10.9583 17.875 11.1416 17.875 11.3666Z"
                fill="#2C2D2E"
              />
              <path
                d="M14.9917 10.575C14.575 10.9834 14.375 11.5917 14.5417 12.225C14.7584 13 15.5167 13.4917 16.3167 13.4917H17.0417C17.5 13.4917 17.875 13.8667 17.875 14.325V14.4834C17.875 16.2084 16.4667 17.6167 14.7417 17.6167H5.17502C3.45002 17.6167 2.04169 16.2084 2.04169 14.4834V8.87503C2.04169 7.85003 2.53335 6.9417 3.29169 6.37503C3.81669 5.97503 4.46669 5.7417 5.17502 5.7417H14.7417C16.4667 5.7417 17.875 7.15003 17.875 8.87503V9.2417C17.875 9.70003 17.5 10.075 17.0417 10.075H16.1917C15.725 10.075 15.3 10.2584 14.9917 10.575Z"
                fill="#2C2D2E"
              />
              <path
                d="M13.5 4.01675C13.725 4.24175 13.5333 4.59175 13.2167 4.59175L6.81668 4.58341C6.45001 4.58341 6.25834 4.13341 6.52501 3.87508L7.87501 2.51675C9.01667 1.38341 10.8667 1.38341 12.0083 2.51675L13.4667 3.99175C13.475 4.00008 13.4917 4.00841 13.5 4.01675Z"
                fill="#2C2D2E"
              />
            </svg>
            <h3 className="select-none text-sm font-normal">Profile</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
