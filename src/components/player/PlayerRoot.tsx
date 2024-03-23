import { ComponentProps, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

type PlayerRootProps = ComponentProps<'div'>

const PlayerRoot = forwardRef<HTMLDivElement, PlayerRootProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={twMerge(
          'group/player relative aspect-video h-min w-[300px] overflow-hidden rounded-2xl bg-white/5 object-cover',
          className,
        )}
        {...props}
      >
        {children}
      </div>
    )
  },
)

export default PlayerRoot
