import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type PlayerOverlayProps = ComponentProps<'div'>

const PlayerOverlay = ({ className, ...props }: PlayerOverlayProps) => {
  return (
    <div
      className={twMerge(
        'to-/90 absolute h-full w-full cursor-pointer from-black via-black/70 to-transparent group-hover/player:bg-gradient-to-t',
        className,
      )}
      {...props}
    />
  )
}

export default PlayerOverlay
