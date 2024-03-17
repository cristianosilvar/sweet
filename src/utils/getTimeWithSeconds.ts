export const getTimeWithSeconds = (seconds: number) => {
  const date = new Date(seconds * 1000)

  const hours = date.getUTCHours()
  const minutes = date.getUTCMinutes()
  const remainingSeconds = date.getUTCSeconds()

  return { hours, minutes, seconds: remainingSeconds }
}
