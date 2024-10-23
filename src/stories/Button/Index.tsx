import React from "react";
import classNames from "classnames";

export interface ButtonProps {
  /** 色 */
  color?: "primary" | "secondary" | "disabled";
  /** サイズ */
  size?: "small" | "medium" | "large";
  /** 表示テキスト */
  label: string;
  /** クリックした時の処理 */
  onClick?: () => void;
}

/** 汎用的なボタン　*/
export const Button = ({
  color = "primary",
  size = "medium",
  label,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={classNames(
        "rounded text-neutral-900 font-bold transition-all focus:shadow-none focus:translate-y-3px",
        {
          "text-sm py-2 px-3": size === "small",
          "text-base py-2 px-4": size === "medium",
          "text-lg py-2 px-5": size === "large",
        },
        {
          "bg-al-button-primary shadow-al-button-primary al-button-primary-hovered al-button-primary-focused":
            color === "primary",
          "bg-al-button-secondary shadow-al-button-secondary al-button-secondary-hovered al-button-secondary-focused":
            color === "secondary",
          "bg-al-button-disabled shadow-al-button-disabled pointer-events-none":
            color === "disabled",
        }
      )}
      {...props}
    >
      {label}
    </button>
  );
};
