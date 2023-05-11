import { useTheme } from "app/providers/ThemeProvider";
import LightIcon from "shared/assets/icons/theme-light.svg";
import DarkIcon from "shared/assets/icons/theme-dark.svg";
import Button from "shared/ui/Button/Button";


const ThemeSwitcher = () => {
  const { theme, toogleTheme } = useTheme();

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
