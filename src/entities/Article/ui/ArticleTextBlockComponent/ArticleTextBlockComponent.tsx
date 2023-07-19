import { FC } from 'react';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.articleTextBlockComponent, {}, [className])}>
      {title && <Text title={title} className={cls.title} />}
      {paragraphs.map((p, i) => (
        <Text key={i} text={p} className={cls.text} />
      ))}
    </div>
  );
};
