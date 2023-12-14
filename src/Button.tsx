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
    [styles[`button--${size}`]]: size,
    [styles[`button--${theme}`]]: theme,
    [styles[`button--${variant}`]]: variant,
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
