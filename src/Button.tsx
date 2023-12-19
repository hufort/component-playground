import classnames from "classnames"
import styles from "./Button.module.css"

// This helper returns the class name for a given key, or an empty string if the key is undefined.
// Could be extracted for use in other components if we were to use the pattern implemented here.
function getClassName<Key extends string>(
  key: Key | undefined,
  mapping: Record<Key, string>
): string {
  return key ? mapping[key] : ""
}

type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl"
type ButtonTheme = "default" | "interaction" | "create" | "destroy"
type ButtonVariant = "fill" | "outline" | "ghost"
type ButtonProps = {
  children: React.ReactNode
  icon?: string
  iconLeft?: string
  iconRight?: string
  size?: ButtonSize
  theme?: ButtonTheme
  variant?: ButtonVariant
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const SIZES: Record<ButtonSize, string> = {
  xs: "button--xs",
  sm: "button--sm",
  md: "button--md",
  lg: "button--lg",
  xl: "button--xl",
}
const THEMES: Record<ButtonTheme, string> = {
  default: "button--default",
  interaction: "button--interaction",
  create: "button--create",
  destroy: "button--destroy",
}
const VARIANTS: Record<ButtonVariant, string> = {
  fill: "button--fill",
  outline: "button--outline",
  ghost: "button--ghost",
}

const DEFAULT_PROPS: Pick<ButtonProps, "size" | "theme" | "type" | "variant"> =
  {
    size: "md",
    theme: "default",
    variant: "fill",
    type: "button",
  }

export function Button({
  children,
  icon,
  iconLeft,
  iconRight,
  size = DEFAULT_PROPS.size,
  theme = DEFAULT_PROPS.theme,
  type = DEFAULT_PROPS.type,
  variant = DEFAULT_PROPS.variant,
  ...restProps
}: ButtonProps) {
  const modifierClass = [
    styles[getClassName(size, SIZES)],
    styles[getClassName(theme, THEMES)],
    styles[getClassName(variant, VARIANTS)],
  ]

  return (
    <button
      className={classnames(styles.button, modifierClass)}
      type={type}
      {...restProps}
    >
      {iconLeft && <span>{iconLeft}</span>}
      {icon ? icon : children}
      {iconRight && <span>{iconRight}</span>}
    </button>
  )
}
