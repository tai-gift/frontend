"use client";

import Image from "next/image";
import StoryImage from "/public/images/about/storyImage.png";
import { useState } from "react";

const storiesData = [
  {
    title: "Meet Grace",
    description:
      "She went from selling oranges on the street to graduating at the top of her class, thanks to donations.",
    image: StoryImage,
  },
  {
    title: "Meet John",
    description:
      "He overcame numerous challenges to become a successful entrepreneur, thanks to community support.",
    image: StoryImage,
  },
];

const Stories: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === storiesData.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? storiesData.length - 1 : prevIndex - 1,
    );
  };

  const currentStory = storiesData[currentIndex];

  return (
    <section className="w-full py-12">
      <div className="mx-auto w-[90%] md:w-[85%]">
        <div className="flex w-full flex-col items-center justify-center gap-10 md:gap-20">
          <h2 className="text-4xl font-bold text-[#28292A] md:text-5xl">
            Real Impact Stories
          </h2>
          <div className="flex w-full flex-col items-center justify-center gap-6 lg:flex-row lg:items-end lg:justify-start">
            <div className="flex w-full flex-col items-start rounded-[48px] border border-[#ECEEF0] md:flex-row md:items-center md:justify-center">
              <div className="lg:flex-shrink-0">
                <Image
                  src={currentStory.image}
                  alt="story image"
                  className="h-auto w-full object-contain lg:w-[298px]"
                  priority
                />
              </div>
              <div className="flex flex-col items-center justify-center gap-5 lg:flex-grow">
                <h2 className="tex-primary text-center text-3xl text-primary md:text-4xl">
                {currentStory.title}
                </h2>
                <p className="mx-auto max-w-[349px] text-center text-lg font-normal text-[#28292A] md:text-xl">
                {currentStory.description}
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center gap-5 lg:flex-col">
              <button
                type="button"
                aria-label="prev-button"
                onClick={handlePrev}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-[#ECECEC] outline-none"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.9752 15.6833C7.81686 15.6833 7.65853 15.625 7.53353 15.5L2.4752 10.4416C2.23353 10.2 2.23353 9.79998 2.4752 9.55831L7.53353 4.49998C7.7752 4.25831 8.1752 4.25831 8.41686 4.49998C8.65853 4.74164 8.65853 5.14164 8.41686 5.38331L3.8002 9.99998L8.41686 14.6166C8.65853 14.8583 8.65853 15.2583 8.41686 15.5C8.3002 15.625 8.13353 15.6833 7.9752 15.6833Z"
                    fill="#1E1E1E"
                  />
                  <path
                    d="M17.0831 10.625H3.05811C2.71644 10.625 2.43311 10.3417 2.43311 10C2.43311 9.65833 2.71644 9.375 3.05811 9.375H17.0831C17.4248 9.375 17.7081 9.65833 17.7081 10C17.7081 10.3417 17.4248 10.625 17.0831 10.625Z"
                    fill="#1E1E1E"
                  />
                </svg>
              </button>
              <button
                type="button"
                aria-label="next-button"
                onClick={handleNext}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-[#ECECEC] outline-none"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.0248 15.6833C12.1831 15.6833 12.3415 15.625 12.4665 15.5L17.5248 10.4416C17.7665 10.2 17.7665 9.79998 17.5248 9.55831L12.4665 4.49998C12.2248 4.25831 11.8248 4.25831 11.5831 4.49998C11.3415 4.74164 11.3415 5.14164 11.5831 5.38331L16.1998 9.99998L11.5831 14.6166C11.3415 14.8583 11.3415 15.2583 11.5831 15.5C11.6998 15.625 11.8665 15.6833 12.0248 15.6833Z"
                    fill="#1E1E1E"
                  />
                  <path
                    d="M2.91689 10.625H16.9419C17.2836 10.625 17.5669 10.3417 17.5669 10C17.5669 9.65833 17.2836 9.375 16.9419 9.375H2.91689C2.57523 9.375 2.29189 9.65833 2.29189 10C2.29189 10.3417 2.57523 10.625 2.91689 10.625Z"
                    fill="#1E1E1E"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stories;
