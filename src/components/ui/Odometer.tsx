"use client";

import React, { useState, useEffect, useRef } from "react";

interface OdometerProps {
  value: string | number;
  duration?: number;
  fontSize?: string;
  color?: string;
  className?: string;
  loading?: boolean;
}

interface DigitProps {
  value: number | string;
  fontSize?: string;
  color?: string;
  isComma?: boolean;
  loading?: boolean;
}

const SkeletonDigit: React.FC<{ width: string; fontSize: string }> = ({
  width,
  fontSize,
}) => (
  <span
    className="inline-block animate-pulse bg-gray-600"
    style={{
      width: width,
      fontSize: fontSize,
      height: "1em",
    }}
  ></span>
);

const Digit: React.FC<DigitProps> = ({
  value,
  fontSize = "1rem",
  color = "inherit",
  isComma = false,
  loading = false,
}) => {
  const digitRef = useRef<HTMLDivElement>(null);
  const [digitHeight, setDigitHeight] = useState(0);

  useEffect(() => {
    if (digitRef.current) {
      const height = digitRef.current.clientHeight / 10;
      setDigitHeight(height);
    }
  }, [fontSize]);

  const digitWidth = parseFloat(fontSize) * (isComma ? 0.3 : 0.6);

  if (loading) {
    return <SkeletonDigit width={`${digitWidth}rem`} fontSize={fontSize} />;
  }

  return isComma ? (
    <span
      className="inline-block"
      style={{
        width: `${digitWidth}rem`,
        fontSize,
        color,
      }}
    >
      ,
    </span>
  ) : (
    <span
      className="relative inline-block overflow-hidden"
      style={{
        height: `${digitHeight}px`,
        width: `${digitWidth}rem`,
        marginLeft: "-0.5px",
        marginRight: "-0.5px",
      }}
    >
      <span
        ref={digitRef}
        className="absolute flex flex-col items-center transition-all duration-500 ease-out"
        style={{
          transform: `translateY(${-Number(value) * digitHeight}px)`,
          color,
          fontSize,
          lineHeight: "1",
        }}
      >
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
          <span
            key={num}
            className="flex h-full items-center justify-center leading-none"
          >
            {num}
          </span>
        ))}
      </span>
    </span>
  );
};

const Odometer: React.FC<OdometerProps> = ({
  value,
  duration = 1000,
  fontSize = "1rem",
  color = "inherit",
  className = "",
  loading = false,
}) => {
  const numericValue = String(value).replace(/[^\d.]/g, "");
  const [displayValue, setDisplayValue] = useState(
    parseFloat(numericValue) || 0,
  );
  const frameRef = useRef<number>();

  useEffect(() => {
    if (!loading) {
      const targetValue = parseFloat(numericValue) || 0;
      const startTime = Date.now();
      const startValue = displayValue;
      const difference = targetValue - startValue;

      const updateValue = () => {
        const currentTime = Date.now();
        const elapsed = currentTime - startTime;

        if (elapsed < duration) {
          const progress = elapsed / duration;
          const easeProgress = 1 - Math.pow(1 - progress, 4);
          const currentValue = startValue + difference * easeProgress;
          setDisplayValue(currentValue);
          frameRef.current = requestAnimationFrame(updateValue);
        } else {
          setDisplayValue(targetValue);
        }
      };

      frameRef.current = requestAnimationFrame(updateValue);

      return () => {
        if (frameRef.current) {
          cancelAnimationFrame(frameRef.current);
        }
      };
    }
  }, [value, duration, displayValue, numericValue, loading]);

  if (loading) {
    return (
      <span
        className={`inline-flex items-center ${className}`}
        style={{ letterSpacing: "-0.05em" }}
      >
        {Array.from({ length: String(displayValue).length }).map((_, index) => (
          <SkeletonDigit key={index} width="0.6rem" fontSize={fontSize} />
        ))}
      </span>
    );
  }

  const formatNumber = (num: number) => {
    const parts = num.toFixed(2).split(".");
    const integerPart = parts[0];
    const decimalPart = parts[1];

    const withCommas = integerPart
      .split("")
      .reverse()
      .reduce((acc, digit, i) => {
        if (i > 0 && i % 3 === 0) {
          return [...acc, ",", digit];
        }
        return [...acc, digit];
      }, [] as string[])
      .reverse();

    return { integerParts: withCommas, decimalPart };
  };

  const { integerParts, decimalPart } = formatNumber(displayValue);

  return (
    <span
      className={`inline-flex items-center ${className}`}
      style={{ letterSpacing: "-0.05em" }}
    >
      {!loading &&
        integerParts.map((char, index) =>
          char === "," ? (
            <Digit
              key={`comma-${index}`}
              value={char}
              fontSize={fontSize}
              color={color}
              isComma={true}
            />
          ) : (
            <Digit
              key={`${index}-${char}`}
              value={parseInt(char)}
              fontSize={fontSize}
              color={color}
            />
          ),
        )}
      {!loading && decimalPart && decimalPart !== "00" && (
        <>
          <span className="mx-[1px]">.</span>
          {decimalPart.split("").map((digit, index) => (
            <Digit
              key={`decimal-${index}-${digit}`}
              value={parseInt(digit)}
              fontSize={fontSize}
              color={color}
            />
          ))}
        </>
      )}
    </span>
  );
};

export default Odometer;
