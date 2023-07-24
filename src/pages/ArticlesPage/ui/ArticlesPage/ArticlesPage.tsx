import { ArticleList, ArticleView } from 'entities/Article';
import {
  articlesPageActions,
  articlesPageReducer,
  getArticles
} from 'pages/ArticlesPage/model/slices/articlesPageSlice';
import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import {
  DynamicModuleLoader,
  ReducerList
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffects } from 'shared/lib/hooks/useInitialEffects/useInitialEffects';
import {
  fetchArticleList
} from 'pages/ArticlesPage/model/services/fetchArticleList/fetchArticleList';
import { useSelector } from 'react-redux';
import { ArticleViewSelector } from 'entities/Article/ui/ArticleViewSelector/ArticleViewSelector';
import cls from './ArticlesPage.module.scss';
import {

  getArticlesPageError,

  getArticlesPageIsLoading,

  getArticlesPageView

} from '../../model/selectors/articlesPageSelectors';

interface ArticlesPageProps {
   className?: string;
}

const reducers: ReducerList = {
  articlesPage: articlesPageReducer
};

const ArticlesPage: FC<ArticlesPageProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation('articles');
  const dispatch = useAppDispatch();
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const error = useSelector(getArticlesPageError);
  const view = useSelector(getArticlesPageView);

  const onChangeView = useCallback((view: ArticleView) => {
    dispatch(articlesPageActions.setView(view));
  }, [dispatch]);

  useInitialEffects(() => {
    dispatch(fetchArticleList());
    dispatch(articlesPageActions.init());
  });

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames(cls.articlesPage, {}, [className])}>
        <ArticleViewSelector view={view} onViewClick={onChangeView} />
        <ArticleList
          isLoading={isLoading}
          view={view}
          articles={articles}
        />
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlesPage);
