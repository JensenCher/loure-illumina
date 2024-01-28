import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// utils.ts

export const convertToRoman = (num: number): string => {
  if (isNaN(num) || num < -3999 || num > 3999) {
    throw new Error('Invalid input. Please enter a number between -3999 and 3999.');
  }

  if (num === 0) {
    return '0';
  }

  const isNegative = num < 0;
  num = Math.abs(num);

  const romanNumerals: Record<string, number> = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let result = '';

  for (const [roman, value] of Object.entries(romanNumerals)) {
    const count = Math.floor(num / value);
    num -= count * value;
    result += roman.repeat(count);
  }

  return isNegative ? `-${result}` : result;
};
