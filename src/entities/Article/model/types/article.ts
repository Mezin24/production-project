export enum ArticleBlockType {
  CODE = 'CODE',
  IMAGE = 'IMAGE',
  TEXT = 'TEXT',
}

interface ArticleBlockBase {
  id: string
  type: ArticleBlockType
}

interface ArticleCodeBlock extends ArticleBlockBase{
  type: ArticleBlockType.CODE,
  code: string
}

interface ArticleImageBlock extends ArticleBlockBase{
  type: ArticleBlockType.IMAGE,
  src: string,
  title: string
}

interface ArticleTextBlock extends ArticleBlockBase{
  type: ArticleBlockType.TEXT,
  title?: string,
  paragraphs: string[]
}

export type ArticleBlock = ArticleTextBlock | ArticleCodeBlock | ArticleImageBlock

export enum ArticleType {
  IT = 'IT',
  SCIENCE = 'SCIENCE',
  ECONOMICS = 'ECONOMICS',
}

export interface Article {
  id: string
  title: string
  subtitle: string
  img: string
  views: number
  createdAt: string
  type: ArticleType[]
  blocks: ArticleBlock[]
}
