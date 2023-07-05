import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { useCallback, useState } from 'react';
import { Modal } from 'shared/ui/Modal/Modal';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const closeAuthModal = useCallback(() => { setIsAuthModal(false); }, []);

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Button
        onClick={() => setIsAuthModal(true)}
        theme={ButtonTheme.CLEAR_INVERTED}
        className={cls.loginBtn}
      >
        {t('Войти')}
      </Button>
      <Modal isOpen={isAuthModal} onClose={closeAuthModal}>
        {/* eslint-disable-next-line */}
       {t( 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut animi ipsum quo temporibus sit quidem magni exercitationem nisi sunt et.')}
      </Modal>
    </div>
  );
};
