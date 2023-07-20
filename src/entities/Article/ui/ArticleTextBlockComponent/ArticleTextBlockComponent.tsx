import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleTextBlock } from 'entities/Article/model/types/article';
import { Text } from 'shared/ui/Text/Text';
import cls from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
   className?: string;
   block: ArticleTextBlock
}

export const ArticleTextBlockComponent: FC<ArticleTextBlockComponentProps> = (props) => {
  const { className, block: { paragraphs, title } } = props;

  return (
    <div className={classNames(cls.articleTextBlockComponent, {}, [className])}>
      {title && <Text title={title} className={cls.title} />}
      {paragraphs.map((p) => (
        <Text key={p} text={p} className={cls.text} />
      ))}
    </div>
  );
};
