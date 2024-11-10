import { CurrencyIcon } from "../ui";

export default function PrizeCard({
  number,
  price,
}: {
  number: number;
  price: string;
}) {
  return (
    <div className="dark-gradient-1 flex h-[106px] flex-col items-center justify-center gap-2 rounded-9">
      <div className="blaze-gradient-2 flex size-10 items-center justify-center rounded-full">
        <div className="text-BlackEel bx-shadow-1 flex size-7 items-center justify-center rounded-full bg-white text-base font-bold">
          {number}
        </div>
      </div>
      <p className="text-base font-semibold flex items-center space-x-2"><CurrencyIcon /> <span>{price}</span></p>
    </div>
  );
}
