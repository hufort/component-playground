import React from "react"
import { cva } from "class-variance-authority"

import styles from "./button.module.css"

import type { ReactNode } from "react"

export type ButtonProps = {
  children?: ReactNode
  icon?: "ghost" | "unicorn" | "sparkle"
  iconLeft?: "ghost" | "unicorn" | "sparkle"
  iconRight?: "ghost" | "unicorn" | "sparkle"
  size?: "xs" | "sm" | "md" | "lg" | "xl"
  theme?: "default" | "primary"
  type?: "button" | "submit" | "reset"
  variant?: "fill" | "outline" | "naked"
  // TODO
  to?: string
  spinner?: unknown
}

const buttonCVA = cva(styles.base, {
  variants: {
    size: {
      xs: styles.xs,
      sm: styles.sm,
      md: styles.md,
      lg: styles.lg,
      xl: styles.xl,
    },
    theme: {
      default: styles.default,
      primary: styles.primary,
    },
    variant: {
      fill: styles.fill,
      outline: styles.outline,
      naked: styles.naked,
    },
  },
  compoundVariants: [
    {
      theme: "primary",
      variant: "fill",
      class: styles["primary-fill"],
    },
    {
      theme: "primary",
      variant: "outline",
      class: styles["primary-outline"],
    },
    {
      theme: "primary",
      variant: "naked",
      class: styles["primary-naked"],
    },
    {
      theme: "default",
      variant: "fill",
      class: styles["default-fill"],
    },
    {
      theme: "default",
      variant: "outline",
      class: styles["default-outline"],
    },
    {
      theme: "default",
      variant: "naked",
      class: styles["default-naked"],
    },
    // Add other compound variants
  ],
  defaultVariants: {
    size: "md",
    theme: "default",
    variant: "fill",
  },
})

const ICONS: Record<string, string> = {
  ghost: "👻",
  unicorn: "🦄",
  sparkle: "✨",
}

const renderIcon = (iconName: string) => {
  return <span>{ICONS[iconName]}</span>
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      icon = null,
      iconLeft,
      iconRight,
      size = "md",
      theme = "default",
      type = "button",
      variant = "fill",
      ...props
    },
    ref
  ) => {
    const className = buttonCVA({ size, theme, variant })
    return (
      <button className={className} ref={ref} type={type} {...props}>
        {iconLeft && renderIcon(iconLeft)}
        {(icon && renderIcon(icon)) || children}
        {iconRight && renderIcon(iconRight)}
      </button>
    )
  }
)

Button.displayName = "Button"

export { Button }
