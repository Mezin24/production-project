import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'widgets/Langsitcher';
import cls from './Sidebar.module.scss';

interface SidebarProps {
   className?: string;
}
export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed((prev) => !prev);
  };
  return (
    <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
      <button type="button" onClick={toggle}>toggle</button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};
