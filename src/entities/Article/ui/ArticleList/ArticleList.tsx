import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleList.module.scss';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleItem } from '../ArticleItem/ArticleItem';

interface ArticleListProps {
   className?: string;
   articles: Article[],
   isLoading?: boolean,
   view?: ArticleView
}

export const ArticleList: FC<ArticleListProps> = (props) => {
  const {
    className,
    articles,
    isLoading,
    view = ArticleView.SMALL
  } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.articleList, {}, [className, cls[view]])}>
      {articles?.length > 0
        ? articles?.map((article) => (
          <ArticleItem key={article.id} article={article} view={view} />
        ))
        : null}
    </div>
  );
};
