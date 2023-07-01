import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './PageError.module.scss';

interface PageErrorProps {
  className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
  const { t } = useTranslation();
  const pageReload = () => {
    window.location.reload();
  };
  return (
    <div className={classNames(cls.PageError, {}, [className])}>
      <h1>{t('Что то пошло не так')}</h1>
      <button type="button" onClick={pageReload}>{t('перезагрузить страницу')}</button>
    </div>
  );
};
