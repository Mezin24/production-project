import { Article, ArticleView } from 'entities/Article/model/types/article';
import { FC } from 'react';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { Icon } from 'shared/ui/Icon/Icon';
import { Text } from 'shared/ui/Text/Text';
import { Card } from 'shared/ui/Card/Card';
import { useHover } from 'shared/lib/hooks/useHover';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import cls from './ArticleItem.module.scss';

interface ArticleItemProps {
   className?: string;
   article: Article;
   view?: ArticleView
}

export const ArticleItem: FC<ArticleItemProps> = (props) => {
  const { className, article, view = ArticleView.SMALL } = props;
  const [isHover, bindHover] = useHover();

  if (view === ArticleView.BIG) {
    return (
      <div className={classNames('', {}, [className, cls[view]])}>
        <Card className={cls.card}>
          <div className={cls.header}>
            <Avatar size={30} src={article.user?.avatar} />
            <Text text={article.user?.username} className={cls.username} />
            <Text text={article.createdAt} className={cls.createdAt} />
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div {...bindHover} className={classNames('', {}, [className, cls[view]])}>
      <Card className={cls.card}>
        <div className={cls.imageWrapper}>
          <img src={article.img} alt={article.title} className={cls.img} />
          <Text className={cls.createdAt} text={article.createdAt} />
        </div>
        <div className={cls.infoWrapper}>
          <Text className={cls.types} text={article.type?.join(', ')} />
          <Text className={cls.views} text={String(article.views)} />
          <Icon Svg={EyeIcon} />
        </div>
        <Text text={article.title} className={cls.title} />
      </Card>
    </div>
  );
};
