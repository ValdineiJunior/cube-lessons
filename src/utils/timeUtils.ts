export const formatTime = (time: number) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  const milliseconds = Math.floor((time % 1) * 100);
  return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}:${milliseconds.toString().padStart(2, "0")}`;
};
