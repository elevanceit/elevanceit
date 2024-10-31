import { ForwardedRef, HTMLAttributeAnchorTarget, HTMLAttributes, forwardRef } from "react"
import Link from "next/link"
import { VariantProps } from "tailwind-variants"
import { cn } from "../../utils"
import { ButtonTheme } from "./theme"

export interface ButtonVariants extends VariantProps<typeof ButtonTheme> {}

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement | HTMLAnchorElement>, ButtonVariants {
  hover?: boolean
  href?: string
  target?: HTMLAttributeAnchorTarget
  rounded?: boolean
  outline?: boolean
  disabled?: boolean
  type?: "submit" | "reset" | "button" | undefined
}

export const Button = forwardRef<HTMLAnchorElement | HTMLButtonElement, ButtonProps>(function Button(
  {
    hover,
    href,
    target,
    rounded,
    outline,
    variant = "primary",
    dark = true,
    className,
    children,
    disabled,
    type,
    ...rest
  }: ButtonProps,
  ref
) {
  return href ? (
    <Link
      role="link"
      ref={ref as ForwardedRef<HTMLAnchorElement>}
      href={href}
      target={target}
      className={cn("relative", ButtonTheme({ variant, dark, outline }), rounded && "rounded-full", className)}
      {...rest}
    >
      {children}
    </Link>
  ) : (
    <button
      role="button"
      type={type}
      ref={ref as ForwardedRef<HTMLButtonElement>}
      disabled={disabled}
      className={cn("relative", ButtonTheme({ variant, dark, outline }), rounded && "rounded-full", className)}
      {...rest}
    >
      {children}
    </button>
  )
})
