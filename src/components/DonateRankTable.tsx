import Image from "next/image";
import EdumonoIcon from "/public/svgs/EdumonoIcon.svg";

const DonateRankTable = () => {
  return (
    <div className="w-full space-y-3 pb-10">
      <div className="grid min-h-8 w-full grid-cols-[40px_1fr_90px] items-center gap-4 rounded-lg bg-primary-300 px-4 py-1 lg:grid-cols-[90px_1fr_120px]">
        <div className="text-start">
          <h3 className="font-fustat text-xs font-semibold md:text-base">
            Rank
          </h3>
        </div>
        <div className="text-start">
          <h3 className="font-fustat text-xs font-semibold md:text-base">
            Player
          </h3>
        </div>
        <div className="text-end">
          <h3 className="font-fustat text-xs font-semibold md:text-base">
            Donated
          </h3>
        </div>
      </div>
      <div className="w-full space-y-3">
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            key={index}
            className="grid min-h-8 w-full grid-cols-[40px_1fr_60px] items-center gap-4 rounded-lg bg-primary-300 px-4 py-1 lg:grid-cols-[80px_1fr_120px]"
          >
            <div className="bg-primary-400 grid h-9 w-9 place-content-center rounded-full p-4 lg:h-12 lg:w-12">
              <div className="flex h-5 w-5 select-none items-center justify-center rounded-full bg-white lg:h-9 lg:w-9">
                <h4 className="text-sm font-bold text-BlackEel lg:text-base">
                  {index}
                </h4>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-6 w-6 select-none items-center justify-center rounded-full bg-primary text-white lg:h-9 lg:w-9">
                <h3 className="text-xs font-bold md:text-sm lg:text-base">B</h3>
              </div>
              <h4 className="text-sm font-normal md:text-base">
                silverfrog{index}
              </h4>
            </div>
            <div className="flex w-full items-center justify-end gap-1">
              <h4 className="text-lg font-bold">5</h4>

              <Image
                src={EdumonoIcon}
                alt="EDU icon mono"
                width={16}
                height={16}
              />

              <span className="text-xs">EDU</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonateRankTable;
