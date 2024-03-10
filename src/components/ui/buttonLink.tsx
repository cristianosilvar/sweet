import { ComponentProps, ElementType } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { twMerge } from 'tailwind-merge'

import Button from '../button'

interface ButtonLinkProps extends ComponentProps<'button'> {
  icon?: ElementType
  textButton?: string
}

const ButtonLink = ({
  icon = ArrowUpRight,
  textButton = '',
  className,
  ...props
}: ButtonLinkProps) => {
  return (
    <Button.Root {...props} className={twMerge('w-max', className)}>
      <Button.Content
        text={textButton}
        className=" text-white/50  group-hover/button:text-white/80"
      />
      <Button.Icon
        icon={icon}
        className="rounded-full bg-white/50 p-1 text-zinc-900 group-hover/button:bg-white/80"
      />
    </Button.Root>
  )
}

export default ButtonLink
