type typeOptions = 'hoursMinutesSeconds' | 'minutesSeconds'

export const formatTime = (
  hours: number = 0,
  minutes: number = 0,
  seconds: number = 0,
  option: typeOptions = 'hoursMinutesSeconds',
) => {
  const time = {
    hours: hours.toFixed(0),
    minutes: minutes.toFixed(0),
    seconds: seconds.toFixed(0),
  }

  switch (option) {
    case 'hoursMinutesSeconds':
      return `${time.hours.padStart(2, '0')}:${time.minutes.padStart(2, '0')}:${time.seconds.padStart(2, '0')}`
    case 'minutesSeconds':
      return `${time.minutes.padStart(2, '0')}:${time.seconds.padStart(2, '0')}`
    default:
      return `${time.hours}:${time.minutes}:${time.seconds}`
  }
}
