import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number, isAnnual: boolean = false): string {
  if (price === 0) return "0";
  if (isAnnual) {
    const annualPrice = Math.round(price * 12 * 0.8);
    return annualPrice.toString();
  }
  return price.toString();
}

export function formatMonthlyFromAnnual(annualPrice: number): string {
  return (annualPrice / 12).toFixed(1).replace(".", ",");
}
