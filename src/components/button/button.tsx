import React from "react"
import { cva } from "class-variance-authority"

import styles from "./button.module.css"
import { ICONS } from "../../icons"

import type { ReactNode } from "react"

export type ButtonProps = {
  children?: ReactNode
  icon?: "ghost" | "unicorn" | "sparkle"
  iconLeft?: "ghost" | "unicorn" | "sparkle"
  iconRight?: "ghost" | "unicorn" | "sparkle"
  size?: "xs" | "sm" | "md" | "lg" | "xl"
  theme?: "default" | "primary" | "warning" | "error" | "interaction"
  type?: "button" | "submit" | "reset"
  variant?: "outline" | "naked"
  // TODO
  to?: string
  spinner?: unknown
} & React.ButtonHTMLAttributes<HTMLButtonElement>

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
      warning: styles.warning,
      error: styles.error,
      interaction: styles.interaction,
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
      variant: "outline",
      class: styles["default-outline"],
    },
    {
      theme: "default",
      variant: "naked",
      class: styles["default-naked"],
    },
    {
      theme: "warning",
      variant: "outline",
      class: styles["warning-outline"],
    },
    {
      theme: "warning",
      variant: "naked",
      class: styles["warning-naked"],
    },
    {
      theme: "error",
      variant: "outline",
      class: styles["error-outline"],
    },
    {
      theme: "error",
      variant: "naked",
      class: styles["error-naked"],
    },
    {
      theme: "interaction",
      variant: "outline",
      class: styles["interaction-outline"],
    },
    {
      theme: "interaction",
      variant: "naked",
      class: styles["interaction-naked"],
    },
  ],
  defaultVariants: {
    size: "md",
    theme: "default",
  },
})

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
      variant,
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
