import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type PlayerControls = ComponentProps<'div'>

const PlayerControls = ({ children, className, ...props }: PlayerControls) => {
  return (
    <div
      className={twMerge(
        'group/player-controls column absolute bottom-0 z-[100000] hidden w-full flex-col px-2 pb-4 group-hover/player:flex md:px-4',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export default PlayerControls
