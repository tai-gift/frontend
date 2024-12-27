import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="min-h-24 bg-[#F8F9FA] py-8">
      <div className="mx-auto w-[90%] md:w-[85%]">
        <div className="flex w-full flex-col items-center justify-center gap-7 md:flex-row md:justify-between">
          <p className="text-center text-base font-normal text-[#7A7C7F]">
            © Copyright 2024 - Prepme
          </p>
          <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between">
            <nav
              aria-label="socail-navigation"
              className="flex items-center gap-3"
            >
              <Link href="#">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_906_1114)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM12.4308 8.85892C11.2636 9.34439 8.93091 10.3492 5.43267 11.8733C4.86461 12.0992 4.56703 12.3202 4.53994 12.5363C4.49416 12.9015 4.95149 13.0453 5.57425 13.2411C5.65896 13.2677 5.74673 13.2953 5.83671 13.3246C6.44941 13.5238 7.2736 13.7568 7.70206 13.766C8.09072 13.7744 8.5245 13.6142 9.00341 13.2853C12.2719 11.079 13.9592 9.9638 14.0651 9.93976C14.1398 9.9228 14.2434 9.90147 14.3135 9.96383C14.3837 10.0262 14.3768 10.1443 14.3694 10.176C14.3241 10.3691 12.5289 12.0381 11.5999 12.9018C11.3103 13.171 11.1048 13.362 11.0629 13.4056C10.9688 13.5033 10.8729 13.5958 10.7808 13.6846C10.2115 14.2333 9.78469 14.6448 10.8044 15.3168C11.2944 15.6397 11.6865 15.9067 12.0777 16.1731C12.5049 16.4641 12.9311 16.7543 13.4824 17.1157C13.6228 17.2077 13.757 17.3034 13.8877 17.3965C14.3848 17.751 14.8315 18.0694 15.3834 18.0186C15.704 17.9891 16.0352 17.6876 16.2034 16.7883C16.601 14.6631 17.3824 10.0584 17.563 8.16096C17.5788 7.99472 17.5589 7.78196 17.5429 7.68856C17.5269 7.59517 17.4935 7.4621 17.3721 7.36359C17.2284 7.24693 17.0064 7.22232 16.9071 7.22407C16.4558 7.23202 15.7633 7.47281 12.4308 8.85892Z"
                      fill="#98A2B3"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_906_1114">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
              <Link href="#">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.9408 10.392L21.5353 1.5H19.7353L13.1428 9.2205L7.87481 1.5H1.7998L9.76481 13.176L1.7998 22.5H3.5998L10.5628 14.346L16.1263 22.5H22.2013L13.9408 10.392ZM11.4763 13.278L10.6693 12.1155L4.2478 2.865H7.01231L12.1933 10.3305L13.0003 11.493L19.7368 21.198H16.9723L11.4763 13.278Z"
                    fill="#98A2B3"
                  />
                </svg>
              </Link>
            </nav>
            <nav aria-label="footer-navigation">
              <Link href="#" className="text-base font-normal text-[#7A7C7F]">
                <span className="underline">Privacy Policy</span> and{" "}
                <span className="underline">Terms of Service</span>
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
