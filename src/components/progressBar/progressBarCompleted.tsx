import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type ProgressBarCompletedProps = ComponentProps<'div'> & {
  completed: number
}

const progressBarCompleted = ({
  className,
  completed,
  ...props
}: ProgressBarCompletedProps) => {
  return (
    <div
      className={twMerge(`h-full rounded-full bg-white/50`, className)}
      style={{ width: `${completed}%` }}
      {...props}
    />
  )
}

export default progressBarCompleted
