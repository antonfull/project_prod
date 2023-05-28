import React from 'react';
import { BugButton } from 'app/providers/ErrorBoundary';
import { useState } from "react";
import { useTranslation } from 'react-i18next';
import { classNames } from "shared/lib/ClassNames/classNames";
import { LangSwitcher } from "shared/ui/LangSwitcher";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import cls from "./Sidebar.module.scss";

interface SidebarProps {
  className?: string;
}

const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const {t} = useTranslation()
  const toogleCollapsed = () => {
    setCollapsed((prev) => !prev);
  };
  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <BugButton/>
      <button data-testid="sidebar-toogle"
       onClick={toogleCollapsed}>{t('toogle')}</button>
      <div className={classNames(cls.switchers, {}, [])}>
        <ThemeSwitcher />
        <LangSwitcher className={classNames(cls.lang, {}, [])} />
      </div>
    </div>
  );
};

export default Sidebar;
