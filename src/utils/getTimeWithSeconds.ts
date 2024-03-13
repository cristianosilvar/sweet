export const getTimeWithSeconds = (seconds: number) => {
  const [hours, minutes, remainingSeconds] = [
    Math.floor(seconds / 3600),
    Math.floor((seconds % 3600) / 60),
    seconds % 60,
  ]

  return { hours, minutes, seconds: remainingSeconds }
}
