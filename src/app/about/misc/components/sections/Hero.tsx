const Hero: React.FC = () => {
  return (
    <section className="w-full min-h-dvh bg-contain bg-[url('/images/about/aboutherobg.png')] bg-center bg-no-repeat py-10 lg:py-16">
      <div className="mx-auto w-[90%] md:w-[85%]">
        <div className="flex w-full flex-col items-center justify-center gap-4">
          <h1 className="max-w-[750px] text-center font-fustat text-5xl font-bold leading-[73px] md:text-6xl md:leading-[81px]">
            <div className="relative inline">
              <span className="font-fustat text-primary">Donate</span>
              <div className="absolute -bottom-[27px] left-0">
                <svg
                  width="214"
                  height="38"
                  viewBox="0 0 214 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.60706 31.0684C0.0706013 27.181 2.59944 23.5238 6.42707 22.6582C82.3314 5.49327 128.604 -0.231704 211.935 0.0788595C212.862 0.0823131 213.644 0.808836 213.693 1.73444C213.747 2.72956 212.939 3.56836 211.943 3.57962C130.874 4.49559 85.1612 13.2624 10.4852 37.2506C5.98836 38.6951 1.25272 35.7472 0.60706 31.0684Z"
                    fill="#FFB000"
                  />
                </svg>
              </div>
            </div>{" "}
            to Educate. Win Big. Be the{" "}
            <div className="relative inline">
              <span className="font-fustat text-primary">Change</span>
              <div className="absolute -left-[47px] top-0 md:-left-[30px]">
                <svg
                  width="275"
                  height="104"
                  viewBox="0 0 275 104"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M199.676 11.6176C212.992 11.9242 223.577 14.9503 234.162 18.3483C268.876 29.5067 280.486 46.8198 256.699 63.8328C219.708 90.216 133.549 107.483 66.7382 99.5143C51.942 97.7581 31.9103 96.2101 17.2279 87.6336C3.56989 79.6591 4.13897 70.1789 10.3989 61.4022C16.7726 52.4034 29.0648 44.1212 38.8531 38.7974C81.6482 15.5697 167.352 -5.54111 244.861 5.58835C246.455 5.80279 248.048 5.43401 248.504 4.76472C248.959 4.09542 248.162 3.37774 246.682 3.1633C166.896 -8.29062 78.4609 13.2735 34.4138 37.1782C22.2354 43.8166 6.30193 54.8982 1.74926 66.3638C-1.32379 74.2003 0.838286 82.2109 12.6752 89.1795C28.2681 98.3153 49.5521 100.105 65.2588 101.975C134.232 110.206 223.35 92.4337 261.478 65.1852C287.087 46.8993 274.795 28.2731 237.463 16.2792C226.082 12.5925 214.472 9.40649 200.017 9.07439C198.424 9.03822 197.058 9.57865 197.058 10.2805C196.945 10.9824 198.196 11.5814 199.676 11.6176Z"
                    fill="#FFB000"
                  />
                </svg>
              </div>
            </div>
          </h1>
          <p className="max-w-[950px] pt-6 text-center text-lg font-normal text-[#2C2D2E] md:text-xl">
            Every dollar you give brings us closer to ending education{" "}
            <br className="hidden md:block" />
            inequality while giving you a chance to win life-changing prizes.
            Together,
            <br className="hidden md:block" /> we can empower futures today.
          </p>
          <div className="flex w-full flex-col items-center justify-center gap-5 md:flex-row">
            <button
              type="button"
              className="min-h-10 w-fit rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white outline-none transition-all duration-300 hover:opacity-90 md:px-10"
            >
              Donate & Win Now
            </button>
            <button
              type="button"
              className="min-h-10 w-fit rounded-full border border-primary bg-white px-6 py-3 text-sm font-semibold text-primary outline-none transition-all duration-300 hover:opacity-90 md:px-10"
            >
              See the Difference
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
