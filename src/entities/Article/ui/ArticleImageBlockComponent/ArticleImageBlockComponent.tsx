import { ArticleImageBlock } from 'entities/Article/model/types/article';
import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextAlign } from 'shared/ui/Text/Text';
import cls from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
   className?: string;
   block: ArticleImageBlock;
}

export const ArticleImageBlockComponent: FC<ArticleImageBlockComponentProps> = (props) => {
  const { className, block: { src, title } } = props;

  return (
    <div className={classNames(cls.articleImageBlockComponent, {}, [className])}>
      <img src={src} alt={title} />
      {title && <Text align={TextAlign.CENTER} title={title} />}
    </div>
  );
};
