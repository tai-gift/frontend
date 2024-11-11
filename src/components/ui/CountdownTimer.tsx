"use client"

import React, { useState, useEffect, useRef } from 'react';

// Digit Component Types
interface DigitProps {
  value: number | string;
  fontSize?: string;
  color?: string;
}

// Odometer Component Types
interface OdometerProps {
  value: string | number;
  duration?: number;
  fontSize?: string;
  color?: string;
  className?: string;
}

// CountdownTimer Component Types
interface CountdownTimerProps {
  hours?: number;
  minutes?: number;
  seconds?: number;
  onComplete?: () => void;
  title?: string;
  fontSize?: string;
  color?: string;
  className?: string;
  digitClassName?: string;
  separatorClassName?: string;
}

interface TimeLeft {
  hours: number;
  minutes: number;
  seconds: number;
}

// Digit Component
const Digit: React.FC<DigitProps> = ({
  value,
  fontSize = "1rem",
  color = "inherit"
}) => {
  const digitRef = useRef<HTMLDivElement>(null);
  const [digitHeight, setDigitHeight] = useState(0);

  useEffect(() => {
    if (digitRef.current) {
      const height = digitRef.current.clientHeight / 10;
      setDigitHeight(height);
    }
  }, [fontSize]);

  const digitWidth = parseFloat(fontSize) * 0.6;

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
          <span key={num} className="flex h-full items-center justify-center leading-none translate-y-1">
            {num}
          </span>
        ))}
      </span>
    </span>
  );
};

// Odometer Component
const Odometer: React.FC<OdometerProps> = ({
  value,
  fontSize = "1rem",
  color = "inherit",
  className = "",
}) => {
  const formattedValue = String(value).padStart(2, '0');
  const digits = formattedValue.split('');

  return (
    <span className={`inline-flex items-center ${className}`}>
      {digits.map((digit, index) => (
        <Digit
          key={`${index}-${digit}`}
          value={parseInt(digit)}
          fontSize={fontSize}
          color={color}
        />
      ))}
    </span>
  );
};

// CountdownTimer Component
const CountdownTimer: React.FC<CountdownTimerProps> = ({ 
  hours = 0,
  minutes = 0,
  seconds = 0,
  onComplete,
  title = "Next Draw starts in",
  fontSize = "3rem",
  color = "black",
  className = "",
  digitClassName = "mx-1",
  separatorClassName = "mx-2"
}) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    hours: Math.min(99, Math.max(0, parseInt(String(hours)))),
    minutes: Math.min(59, Math.max(0, parseInt(String(minutes)))),
    seconds: Math.min(59, Math.max(0, parseInt(String(seconds))))
  });

  useEffect(() => {
    setTimeLeft({
      hours: Math.min(99, Math.max(0, parseInt(String(hours)))),
      minutes: Math.min(59, Math.max(0, parseInt(String(minutes)))),
      seconds: Math.min(59, Math.max(0, parseInt(String(seconds))))
    });
  }, [hours, minutes, seconds]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.hours === 0 && prev.minutes === 0 && prev.seconds === 0) {
          clearInterval(timer);
          onComplete?.();
          return prev;
        }

        let newHours = prev.hours;
        let newMinutes = prev.minutes;
        let newSeconds = prev.seconds - 1;

        if (newSeconds < 0) {
          newSeconds = 59;
          newMinutes -= 1;

          if (newMinutes < 0) {
            newMinutes = 59;
            newHours -= 1;
          }
        }

        return {
          hours: Math.max(0, newHours),
          minutes: Math.max(0, newMinutes),
          seconds: Math.max(0, newSeconds)
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className={`flex flex-col items-center ${className}`}>
      {title && (
        <h2 className="text-sm mb-2 font-semibold">{title}</h2>
      )}
      <div className="flex items-center justify-center">
        <div className={digitClassName}>
          <Odometer 
            value={timeLeft.hours} 
            fontSize={fontSize}
            color={color}
            duration={500}
          />
        </div>
        
        <span 
          className={`text-${color} ${separatorClassName}`} 
          style={{ fontSize }}
        >
          :
        </span>
        
        <div className={digitClassName}>
          <Odometer 
            value={timeLeft.minutes} 
            fontSize={fontSize}
            color={color}
            duration={500}
          />
        </div>
        
        <span 
          className={`text-${color} ${separatorClassName}`} 
          style={{ fontSize }}
        >
          :
        </span>
        
        <div className={digitClassName}>
          <Odometer 
            value={timeLeft.seconds} 
            fontSize={fontSize}
            color={color}
            duration={500}
          />
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;