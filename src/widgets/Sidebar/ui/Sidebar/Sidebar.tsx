import React from 'react';
import { BugButton } from 'app/providers/ErrorBoundary';
import { useState } from "react";
import { classNames } from "shared/lib/ClassNames/classNames";
import { LangSwitcher } from "shared/ui/LangSwitcher";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import cls from "./Sidebar.module.scss";
import Button, { ButtonSize } from 'shared/ui/Button/Button';
import { ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { routePaths } from 'shared/config/routerConfig/routerConfig';
import MainIcon from '../../../../shared/assets/icons/home.svg'
import AboutIcon from "../../../../shared/assets/icons/about.svg";

interface SidebarProps {
  className?: string;
}

const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const toogleCollapsed = () => {
    setCollapsed((prev) => !prev);
  };
  const {t} = useTranslation()
  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <Button
        data-testid="sidebar-toogle"
        className={cls.btnCollapsed}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        square
        size={ButtonSize.XL}
        onClick={toogleCollapsed}
      >
        {collapsed ? ">" : "<"}
      </Button>
      <div className={cls.items}>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          className={classNames(cls.item, {}, [])}
          to={routePaths.main}
        >
          <MainIcon className={cls.icon} />
          <span className={cls.link}> {t("Главная")}</span>
        </AppLink>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          className={classNames(cls.item, {}, [])}
          to={routePaths.about}
        >
          <AboutIcon className={cls.icon} />
          <span className={cls.link}> {t("О сайте")}</span>
        </AppLink>
      </div>
      <div className={classNames(cls.switchers, {}, [])}>
        <ThemeSwitcher />
        <LangSwitcher
          short={collapsed}
          className={classNames(cls.lang, {}, [])}
        />
      </div>
    </div>
  );
};

export default Sidebar;
