import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { loginActions } from 'features/AuthByUserName/model/slice/loginSlice';
import { memo, useCallback } from 'react';
import { getLoginState } from '../../model/selectors/getLoginsState/getLoginState';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const { username, password } = useSelector(getLoginState);
  const dispatch = useDispatch();

  const changeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const changePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Input
        onChange={changeUsername}
        value={username}
        autoFocus
        type="text"
        className={cls.input}
        placeholder={t('Введите username')}
      />
      <Input
        onChange={changePassword}
        value={password}
        type="text"
        className={cls.input}
        placeholder={t('Введите password')}
      />
      <Button theme={ButtonTheme.OUTLINE} className={cls.loginBtn}>{t('Войти')}</Button>
    </div>
  );
});
