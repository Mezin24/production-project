import {
  ArticleView
} from 'entities/Article/model/types/article';
import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Card } from 'shared/ui/Card/Card';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import cls from './ArticleItem.module.scss';

interface ArticleItemSkeletonProps {
   className?: string;
   view?: ArticleView
}

export const ArticleItemSkeleton: FC<ArticleItemSkeletonProps> = (props) => {
  const { className, view = ArticleView.SMALL } = props;

  if (view === ArticleView.BIG) {
    return (
      <div className={classNames('', {}, [className, cls[view]])}>
        <Card className={cls.card}>
          <div className={cls.header}>
            <Skeleton border="50%" width={30} height={30} />
            <Skeleton width={150} height={16} className={cls.username} />
            <Skeleton width={150} height={16} className={cls.createdAt} />
          </div>
          <Skeleton width={250} height={24} className={cls.title} />
          <Skeleton width="100%" height={200} className={cls.img} />
          <div className={cls.footer}>
            <Skeleton width={200} height={36} />
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className={classNames('', {}, [className, cls[view]])}>
      <Card className={cls.card}>
        <div className={cls.imageWrapper}>
          <Skeleton width={200} height={200} />
        </div>
        <div className={cls.infoWrapper}>
          <Skeleton width={130} height={16} />
        </div>
        <Skeleton width={150} height={16} />
      </Card>
    </div>
  );
};
