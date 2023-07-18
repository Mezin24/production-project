import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
   className?: string;
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation('details');

  return (
    <div className={classNames(cls.articleDetailsPage, {}, [className])}>
      Deatils Page
    </div>
  );
};

export default memo(ArticleDetailsPage);
