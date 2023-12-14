import React from "react"
import { cn } from "../../utils"
import type { ReactNode } from "react"
import styles from "./button.module.css"

// stub StackViewProps type to keep ts happy for now
type StackViewProps = { props?: unknown }
// stub BoxSizes type to keep ts happy for now
// TODO: this may also be an opportunity to reimagine boxSizes
type BoxSizes = { sm: object; md: object; lg: object }

export type ButtonProps = {
  children?: ReactNode

  /**
   * "Soft disables" button by adding an `aria-disabled` attribute and preventing `onClick` and `keyDown` events for "space" / "enter". This approach allows composing components (such as `Tooltip`) to still bubble up their events, while ensuring that clicking the button or submitting a form is prevented.
   */
  disabled?: boolean

  /**
   * Opens the linked destination in a new window or tab.
   */
  external?: boolean

  /**
   * Pass styles for when the button is active.
   */
  active?: object

  /**
   * Pass styles for when the button is focused.
   */
  focus?: object

  /**
   * Pass styles for when the button is keyboard-focused.
   */
  focusVisible?: object

  /**
   * Pass styles for when the button is hovered.
   */
  hover?: object

  /**
   * Renders an [Icon](/icon) in the center of the button. Pass a string or any valid `Icon` props.
   * Must pass a [`title`](/button#title) or [`tooltip.title`](/tooltip#title) when using icon-only buttons.
   */
  icon?: string | object

  /**
   * Same as above, but renders an icon in the left portion of the button.
   */
  iconLeft?: string | object

  /**
   * Same as above, but renders an icon in the right portion of the button.
   */
  iconRight?: string | object

  /**
   * Sizes the button using values defined in [boxSizes](/theming)
   */
  size?: keyof BoxSizes

  /**
   * Renders a [`<Spinner />`](/spinner) in the center of the button. Accepts any valid Spinner props.
   */
  spinner?: unknown

  /**
   * Uses a 1:1 ratio for sizing the button.
   */
  square?: boolean

  /**
   * Uses theme defined in [`buttons.theme`](/theming). Pass `false` to not use theme at all.
   */
  theme?: string | boolean

  /**
   * Renders a text string in the center of the button.
   */
  title?: string

  /**
   * Where the browser should navigate to when pressed. If you need any element here other than `<a>`, remember to use the `as` prop.
   */
  to?: string

  /**
   * Where the browser should navigate to when pressed. If you need any element here other than `<a>`, remember to use the `as` prop.
   */
  href?: string

  /**
   * Wraps button in a [`<Tooltip />`](./tooltip). Accepts any valid Tooltip props.
   */
  tooltip?: string | object

  /**
   * Sets the button type to `button`, `submit`, or `reset`. Default is `button`. Type is only valid for `<button>`s.
   */
  type?: "button" | "submit" | "reset"

  /**
   * Determines the modified style of the button.
   */
  variant?: "fill" | "outline" | "naked"

  onClick?: () => void

  onKeyDown?: () => void

  /** Describes props at different breakpoints. [Read about mediaQueries](/responsive). */
  mediaQueries?: object
} & StackViewProps

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...props }, ref) => {
    // cn() is stand in for a more robust implementation
    // perhaps cva
    const className = cn(styles.base, styles.default)

    return (
      <button className={className} ref={ref} {...props}>
        {children}
      </button>
    )
  }
)

Button.displayName = "Button"

export { Button }
