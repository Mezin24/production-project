import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import ListIcon from 'shared/assets/icons/list.svg';
import TiledIcon from 'shared/assets/icons/tiled-24-24.svg';
import { ArticleView } from 'entities/Article/model/types/article';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import cls from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
   className?: string;
   view: ArticleView,
   onViewClick?: (view: ArticleView) => void
}

const viewTypes = [
  {
    view: ArticleView.SMALL,
    icon: TiledIcon
  },
  {
    view: ArticleView.BIG,
    icon: ListIcon
  }
];

export const ArticleViewSelector: FC<ArticleViewSelectorProps> = (props) => {
  const {
    className,
    view,
    onViewClick
  } = props;

  const onClick = (view: ArticleView) => (
    () => onViewClick?.(view)
  );

  return (
    <div className={classNames(cls.articleViewSelector, {}, [className])}>
      {viewTypes.map((viewType) => (
        <Button key={viewType.view} theme={ButtonTheme.OUTLINE} onClick={onClick(viewType.view)}>
          <Icon
            className={classNames('', { [cls.selected]: viewType.view === view }, [])}
            Svg={viewType.icon}
          />
        </Button>
      ))}
    </div>
  );
};
