import { ComponentProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

import { formatTime } from '../../utils/format/formatTime'
import { TimeProps } from '../../types'

type PlayerTimeProps = ComponentProps<'span'> & {
  time: TimeProps
  separator?: ReactNode
}

const PlayerTime = ({
  time,
  className,
  separator,
  ...props
}: PlayerTimeProps) => {
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
