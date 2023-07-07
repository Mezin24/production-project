import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { useCallback, useState } from 'react';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginModal } from 'features/AuthByUserName';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthUserdata } from 'entities/User/model/selectors/getAuthUserdata/getAuthUserdata';
import { userActions } from 'entities/User';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const dispatch = useDispatch();
  const authData = useSelector(getAuthUserdata);

  const onCloseModal = useCallback(() => { setIsAuthModal(false); }, []);
  const onOpenModal = useCallback(() => { setIsAuthModal(true); }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (authData) {
    return (
      <div className={classNames(cls.Navbar, {}, [className])}>
        <Button
          onClick={onLogout}
          theme={ButtonTheme.CLEAR_INVERTED}
          className={cls.loginBtn}
        >
          {t('Выйти')}
        </Button>
        <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
      </div>
    );
  }

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
