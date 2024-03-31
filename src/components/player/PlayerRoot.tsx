import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export type PlayerRootProps = ComponentProps<'div'>

const PlayerRoot = ({ children, className, ...props }: PlayerRootProps) => {
  return (
    <div
      className={twMerge(
        'group/player relative aspect-video h-min w-[300px] overflow-hidden rounded-2xl border border-gray-900 bg-white/5 object-cover',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export default PlayerRoot
