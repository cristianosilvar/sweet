import { ComponentProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

import { formatTime } from '../../utils/format/formatTime'
import { getTimeWithSeconds } from '../../utils/getTimeWithSeconds'

type PlayerTimeProps = ComponentProps<'span'> & {
  seconds?: number
  separator?: ReactNode
}

const PlayerTime = ({
  seconds = 0,
  className,
  separator,
  ...props
}: PlayerTimeProps) => {
  const time = getTimeWithSeconds(seconds)

  return (
    <>
      <span className={twMerge('text-xs', className)} {...props}>
        {formatTime(
          time.hours,
          time.minutes,
          time.seconds,
          time.hours > 0 ? 'hoursMinutesSeconds' : 'minutesSeconds',
        )}
      </span>
      {separator && (
        <span className={twMerge('mx-1 text-xs', className)}>{separator}</span>
      )}
    </>
  )
}

export default PlayerTime
