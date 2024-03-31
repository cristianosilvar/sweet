import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface FooterLogoProps extends ComponentProps<'div'> {
  text?: string
}

const FooterLogo = ({
  text = 'Sweet',
  className,
  ...props
}: FooterLogoProps) => {
  return (
    <div
      {...props}
      className={twMerge(
        'select-none whitespace-nowrap text-3xl font-bold tracking-tighter',
        className,
      )}
    >
      {text}
    </div>
  )
}

export default FooterLogo
