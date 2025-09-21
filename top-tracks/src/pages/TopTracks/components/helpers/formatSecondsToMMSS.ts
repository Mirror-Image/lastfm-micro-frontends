export const formatSecondsToMMSS = (secondsStr: string): string => {
  const totalSeconds = parseInt(secondsStr, 10);

  if (isNaN(totalSeconds) || totalSeconds < 0) return secondsStr;

  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
};
