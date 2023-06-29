import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import { useState } from 'react';
import { ThemeSitcher } from 'shared/ui/ThemeSwitcher';

interface SidebarProps {
   className?: string;
}
export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(prev => !prev)
  }
 return (
     <div className={classNames(cls.Sidebar , {[cls.collapsed]: collapsed}, [className])}>
       <button onClick={toggle}>toggle</button>
       <div className={cls.switchers}>
        <ThemeSitcher/>
       </div>
     </div>
   );
};
