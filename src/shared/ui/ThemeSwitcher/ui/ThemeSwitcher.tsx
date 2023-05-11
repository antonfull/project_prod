import { useTheme } from "app/providers/ThemeProvider";
import { FC } from "react";
import { classNames } from "shared/lib/ClassNames/classNames";
import cls from "./ThemeSwitcher.module.scss";
import LightIcon from "shared/assets/icons/theme-light.svg";
import DarkIcon from "shared/assets/icons/theme-dark.svg";
import Button from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher = (props: ThemeSwitcherProps) => {
  const { theme, toogleTheme } = useTheme();
  const { className } = props;
  return (
    <Button
      /*Улби прокинул theme сюда, но я поставил по дефолту clear*/
      onClick={toogleTheme}
    >
      {theme === "light" ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
};

export default ThemeSwitcher;
