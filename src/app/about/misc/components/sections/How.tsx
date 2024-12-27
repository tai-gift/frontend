import Image from "next/image";
import HowImage from "/public/images/about/howImage.png";

const howData = [
  {
    title: "Donate:",
    content: "Your contribution supports students and enters you into a draw.",
  },
  {
    title: "Win:",
    content: "Prizes up to $10,000 for donors like you.",
  },
  {
    title: "Transform Lives:",
    content: "Every $50 supports a child for one semester.",
  },
];

const How: React.FC = () => {
  return (
    <section className="w-full py-10">
      <div className="mx-auto w-[90%] md:w-[85%]">
        <div className="flex w-full flex-col items-center justify-center gap-10 md:gap-20">
          <h2 className="text-4xl font-bold text-[#28292A] md:text-5xl">
            How it works
          </h2>
          <div className="grid w-full grid-cols-1 items-start justify-start gap-6 md:grid-cols-2">
            <div className="flex flex-col items-start gap-5">
              {howData.map((how, index) => (
                <div
                  key={index}
                  className="flex w-full flex-col items-start justify-start gap-6 rounded-3xl border border-[#ECEEF0] px-4 py-6"
                >
                  <h4 className="text-sm font-medium text-[#BDC0C3]">
                    # <span className="text-[#28292A]">{index + 1}</span>
                  </h4>
                  <h3 className="flex items-center justify-start gap-3 text-base font-normal text-[#8B8D8F]">
                    <span className="font-semibold">{how.title}</span>{" "}
                    <span>{how.content}</span>
                  </h3>
                </div>
              ))}
            </div>
            <div className="flex w-full items-center justify-center">
              <Image
                src={HowImage}
                alt="how image"
                className="h-auto w-full object-contain md:aspect-square md:w-[400px]"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default How;
