import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/ClassNames/classNames';
import Button from 'shared/ui/Button/Button';
import cls from './PageError.module.scss'

interface PageErrorProps{
	className?: string; 
}

const reloadPage = () => {
	location.reload()
}

const PageError = ({className}: PageErrorProps) => {
	const {t} = useTranslation()
	return (
    <div className={classNames(cls.PageError, {}, [className])}>
      <p>{t("Произошла непредвиденная ошибка")}</p>
      <Button onClick={reloadPage}>{t("Обновить страницу")}</Button>
    </div>
  );
}
 
export default PageError;