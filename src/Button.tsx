import styles from "./Button.module.css"

type ButtonProps = {
  children?: any
  icon?: string | Object
  iconLeft?: string | Object
  iconRight?: string | Object
  type?: "button" | "submit" | "reset"
}

export function Button({
  children,
  icon,
  iconLeft,
  iconRight,
  type = "button",
  ...restProps
}) {
  return (
    <button
      className={styles.button}
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
