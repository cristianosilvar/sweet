import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface FooterCopyrightProps extends Omit<ComponentProps<'p'>, 'children'> {
  text?: string
}

const FooterCopyright = ({
  className,
  text = 'Copyright ©️ 2024 Sweet inc. Todos os direitos reservados.',
  ...props
}: FooterCopyrightProps) => {
  return (
    <p
      {...props}
      className={twMerge('mt-4 text-sm text-[#fefefe70]', className)}
    >
      {text}
    </p>
  )
}

export default FooterCopyright
