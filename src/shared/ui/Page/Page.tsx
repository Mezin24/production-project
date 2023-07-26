import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Page.module.scss';

interface PageProps {
   className?: string;
}

export const Page: FC<PageProps> = (props) => {
  const { className, children } = props;

  return (
    <section className={classNames(cls.page, {}, [className])}>
      {children}
    </section>
  );
};
