import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comment';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
   className?: string;
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation('article-details');
  const { id } = useParams<{id: string}>();

  if (!id) {
    return (
      <div className={classNames(cls.articleDetailsPage, {}, [className])}>
        {t('Статья не найдена')}
      </div>
    );
  }
  return (
    <div className={classNames(cls.articleDetailsPage, {}, [className])}>
      <ArticleDetails id={id} />
      <Text className={cls.commentTitle} title={t('Комментарии')} />
      <CommentList
        isLoading
        comments={[
          {
            id: '1',
            text: 'comment 1',
            user: {
              id: '1',
              username: 'Pavel',
              avatar: 'https://funnyexpo.com/wp-content/uploads/2017/08/Image-1-23.jpg'
            }
          },
          {
            id: '2',
            text: 'comment 2',
            user: {
              id: '1',
              username: 'Pavel',
              avatar: 'https://funnyexpo.com/wp-content/uploads/2017/08/Image-1-23.jpg'
            }
          },
        ]}
      />
    </div>
  );
};

export default memo(ArticleDetailsPage);
