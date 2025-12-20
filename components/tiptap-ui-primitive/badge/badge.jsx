import { forwardRef } from "react"
import styles from "./badge-colors.module.scss"

export const Badge = forwardRef((
  {
    variant,
    size = "default",
    appearance = "default",
    trimText = false,
    className,
    children,
    ...props
  },
  ref
) => {
  return (
    <div
      ref={ref}
      className={`${styles["tiptap-badge"]} ${className || ""}`}
      data-style={variant}
      data-size={size}
      data-appearance={appearance}
      data-text-trim={trimText ? "on" : "off"}
      {...props}>
      {children}
    </div>
  );
})

Badge.displayName = "Badge"

export default Badge
