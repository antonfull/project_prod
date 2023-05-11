import { ButtonHTMLAttributes, FC } from "react";
import { classNames } from "shared/lib/ClassNames/classNames";
import cls from "./Button.module.scss";

export enum ThemeButton {
  CLEAR = "clear",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    theme = ThemeButton.CLEAR,
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
