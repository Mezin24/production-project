import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { useCallback, useState } from 'react';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginModal } from 'features/AuthByUserName';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onCloseModal = useCallback(() => { setIsAuthModal(false); }, []);
  const onOpenModal = useCallback(() => { setIsAuthModal(true); }, []);

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Button
        onClick={onOpenModal}
        theme={ButtonTheme.CLEAR_INVERTED}
        className={cls.loginBtn}
      >
        {t('Войти')}
      </Button>
      <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
    </div>
  );
};
