import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleItem } from '../ArticleItem/ArticleItem';
import { ArticleItemSkeleton } from '../ArticleItem/ArticleItemSkeleton';
import cls from './ArticleList.module.scss';

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

  const getSkeleton = (view: ArticleView) => (
    new Array(view === ArticleView.SMALL ? 9 : 3)
      .fill(0)
      .map((_, index) => (
        <ArticleItemSkeleton view={view} key={index} />
      ))
  );

  if (isLoading) {
    return (
      <div className={classNames(cls.articleList, {}, [className, cls[view]])}>
        {getSkeleton(view)}
      </div>
    );
  }

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
