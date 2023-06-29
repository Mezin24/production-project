import cls from './Navbar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { ThemeSitcher } from 'shared/ui/ThemeSwitcher';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
   <div className={classNames(cls.Navbar, {}, [className])}>
    <ThemeSitcher/>
    <div className={cls.links}>
      <AppLink to='/'>Main</AppLink>
      <AppLink to='/about'>About</AppLink>
    </div>
   </div>
 );
};