import { EntityState } from '@reduxjs/toolkit';
import { ArticleView } from 'entities/Article';
import { Comment } from 'entities/Comment';

export interface ArticlesPageSchema extends EntityState<Comment>{
  isLoading?: boolean,
  error?: string,
  view: ArticleView,
  page: number,
  limit?: number,
  hasMore: boolean
}
