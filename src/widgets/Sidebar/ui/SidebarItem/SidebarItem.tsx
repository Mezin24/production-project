import { t } from 'i18next';
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkThemes } from 'shared/ui/AppLink/AppLink';
import { SidebarItemType } from '../../model/item';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed: boolean
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => (
  <AppLink
    className={classNames(cls.link, { [cls.collapsed]: collapsed }, [])}
    theme={AppLinkThemes.SECONDARY}
    to={item.path}
  >
    <item.Icon className={cls.icon} />
    <span className={cls.linkText}>{t(item.text)}</span>
  </AppLink>
));
