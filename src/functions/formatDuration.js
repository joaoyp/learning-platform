export const formatDuration = (duration) => {
  const [hours, minutes, seconds] = duration.split(":");

  return `${hours}h:${minutes}m:${seconds}s`;
};
