type typeOptions = 'hoursMinutesSeconds'

type typeFormatTime = {
  option: typeOptions
}

const formatTime = (
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

  let resolve: string

  switch (option) {
    case 'hoursMinutesSeconds':
      resolve = `${hours.toFixed(0)}:${minutes.toFixed(0)}:${seconds.toFixed(0)}`
      break
    default:
      resolve = `${time.hours}:${time.minutes}:${time.seconds}`
      break
  }

  return resolve
}
