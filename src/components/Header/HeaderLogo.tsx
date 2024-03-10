import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface HeaderPropsProps extends ComponentProps<'div'> {
  text?: string
}

const HeaderLogo = ({
  text = 'Sweet',
  className,
  ...props
}: HeaderPropsProps) => {
  return (
    <div
      {...props}
      className={twMerge(
        'cursor-pointer whitespace-nowrap text-3xl font-bold tracking-tighter',
        className,
      )}
    >
      {text}
    </div>
  )
}

export default HeaderLogo
