import { useTranslation } from 'react-i18next';
import { classNames } from "shared/lib/ClassNames/classNames";
import AppLink, { AppLinkTheme } from "shared/ui/AppLink/AppLink";
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import cls from "./Navbar.module.scss";
import Modal from "shared/ui/Modal/Modal";
import { useCallback, useState } from 'react';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {

  const {t} = useTranslation()

  const [isAuthModal, setIsAuthModal] = useState(false)

  const onToogleTheme = useCallback(() => {
    setIsAuthModal(prev => !prev)
  }, [])

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={classNames(cls.links, {}, [])}>
        <Button theme={ButtonTheme.CLEAR}
         className={cls.links}
         onClick={onToogleTheme}>
          {t("Войти")}
        </Button>
        <Modal isOpen={isAuthModal} onCLose={onToogleTheme}>
          {t("HIIII")}
        </Modal>
      </div>
    </div>
  );
};
