import { ButtonHTMLAttributes, FC } from "react";
import { classNames } from "shared/lib/ClassNames/classNames";
import cls from "./button.module.scss";

export enum ThemeButton {
  CLEAR = "clear",
  OUTLINE = "outline"
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    theme,
    children,
    ...otherProps
  } = props;
  return (
    <button
      className={classNames(cls.Button, { [cls[theme]]: true }, [className])}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
