import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type ProgressBarRootProps = ComponentProps<'div'>

const ProgressBarRoot = ({
  children,
  className,
  ...props
}: ProgressBarRootProps) => {
  return (
    <div
      className={twMerge(
        'h-1 w-full overflow-hidden rounded-full bg-white/15 hover:cursor-pointer',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export default ProgressBarRoot
