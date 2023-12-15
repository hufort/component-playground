import classnames from "classnames"
import styles from "./Button.module.css"

type ButtonProps = {
  children?: any
  icon?: string | Object
  iconLeft?: string | Object
  iconRight?: string | Object
  size?: "xs" | "sm" | "lg" | "xl"
  theme?: "interaction" | "create" | "destroy"
  type?: "button" | "submit" | "reset"
  variant?: "outline" | "ghost"
}

const BUTTON_SIZES = {
  "xs": "button--xs",
  "sm": "button--sm",
  "lg": "button--lg",
  "xl": "button--xl",
}

const BUTTON_THEMES = {
  "interaction": "button--interaction",
  "create": "button--create",
  "destroy": "button--destroy",
}

const BUTTON_VARIANTS = {
  "outline": "button--outline",
  "ghost": "button--ghost",
}

export function Button({
  children,
  icon,
  iconLeft,
  iconRight,
  size,
  theme,
  type = "button",
  variant,
  ...restProps
}) {
  const modifierClass = {
    [styles[BUTTON_SIZES[size]]]: size,
    [styles[BUTTON_THEMES[theme]]]: theme,
    [styles[BUTTON_VARIANTS[variant]]]: variant,
  }

  return (
    <button
      className={classnames(styles.button, modifierClass)}
      type={type}
      {...restProps}
    >
      {iconLeft && (
        <span>{iconLeft}</span>
      )}
      {icon ? icon : children}
      {iconRight && (
        <span>{iconRight}</span>
      )}
    </button>
  )
}
