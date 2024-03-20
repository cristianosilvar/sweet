import { ComponentProps, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

type PlayerRootProps = ComponentProps<'div'>

const PlayerRoot = forwardRef<HTMLDivElement, PlayerRootProps>(
  ({ children, className }, ref) => {
    return (
      <div
        ref={ref}
        className={twMerge(
          'flex flex-col items-center justify-center',
          className,
        )}
      >
        {children}
      </div>
    )
  },
)
// }) ({ children, className, ...props }: PlayerRootProps) => {
//   return (
//     <div className={twMerge('', className)} {...props}>
//       {children}
//     </div>
//   )
// }

export default PlayerRoot
