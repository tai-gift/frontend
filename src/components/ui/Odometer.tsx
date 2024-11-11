"use client";

import React, { useState, useEffect, useRef } from "react";

interface OdometerProps {
  value: string | number;
  duration?: number;
  fontSize?: string;
  color?: string;
  className?: string;
}

interface DigitProps {
  value: number | string;
  fontSize?: string;
  color?: string;
  isComma?: boolean;
}

const Digit: React.FC<DigitProps> = ({
  value,
  fontSize = "1rem",
  color = "inherit",
  isComma = false
}) => {
  const digitRef = useRef<HTMLDivElement>(null);
  const [digitHeight, setDigitHeight] = useState(0);

  useEffect(() => {
    if (digitRef.current) {
      const height = digitRef.current.clientHeight / 10;
      setDigitHeight(height);
    }
  }, [fontSize]);

  // Calculate width based on font size
  const digitWidth = parseFloat(fontSize) * (isComma ? 0.3 : 0.6);

  if (isComma) {
    return (
      <span 
        className="inline-block"
        style={{ 
          width: `${digitWidth}rem`,
          fontSize: fontSize,
          color: color
        }}
      >
        ,
      </span>
    );
  }

  return (
    <span 
      className="relative inline-block overflow-hidden"
      style={{ 
        height: `${digitHeight}px`, 
        width: `${digitWidth}rem`,
        marginLeft: '-0.5px',
        marginRight: '-0.5px'
      }}
    >
      <span
        ref={digitRef}
        className="absolute flex flex-col items-center transition-all duration-500 ease-out"
        style={{
          transform: `translateY(${-Number(value) * digitHeight}px)`,
          color: color,
          fontSize: fontSize,
          lineHeight: "1",
        }}
      >
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
          <span key={num} className="flex h-full items-center justify-center leading-none">
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
}) => {
  const numericValue = String(value).replace(/[^\d.]/g, '');
  const [displayValue, setDisplayValue] = useState(parseFloat(numericValue) || 0);
  const frameRef = useRef<number>();

  useEffect(() => {
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
  }, [value, duration,displayValue,numericValue]);

  const formatNumber = (num: number) => {
    const parts = num.toFixed(2).split('.');
    const integerPart = parts[0];
    const decimalPart = parts[1];
    
    // Add commas every 3 digits from the right
    const withCommas = integerPart.split('').reverse()
      .reduce((acc, digit, i) => {
        if (i > 0 && i % 3 === 0) {
          return [...acc, ',', digit];
        }
        return [...acc, digit];
      }, [] as string[])
      .reverse();

    return { integerParts: withCommas, decimalPart };
  };

  const { integerParts, decimalPart } = formatNumber(displayValue);
  
  return (
    <span className={`inline-flex items-center ${className}`} style={{ letterSpacing: '-0.05em' }}>
      {integerParts.map((char, index) => (
        char === ',' ? (
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
        )
      ))}
      {decimalPart && decimalPart !== '00' && (
        <>
          <span className="mx-[1px]">.</span>
          {decimalPart.split('').map((digit, index) => (
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