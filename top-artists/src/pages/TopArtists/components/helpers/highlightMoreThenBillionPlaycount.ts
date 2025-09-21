export const highlightMoreThenBillionPlaycount = (playcount: string) =>
  parseFloat(playcount) > 1_000_000_000 ? "text-orange-500" : "";
