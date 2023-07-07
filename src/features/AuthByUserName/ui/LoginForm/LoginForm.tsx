import { loginActions } from 'features/AuthByUserName/model/slice/loginSlice';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input/Input';
import {
  loginByUsername
} from '../../model/services/loginByUsername/loginByUsername';
import { getLoginState } from '../../model/selectors/getLoginsState/getLoginState';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const {
    username, password, error, isLoading
  } = useSelector(getLoginState);
  const dispatch = useDispatch();

  const changeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const changePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const onLogin = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, password, username]);

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      {error && <div>{error}</div>}
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
      <Button
        onClick={onLogin}
        theme={ButtonTheme.OUTLINE}
        className={cls.loginBtn}
        disabled={isLoading}
      >
        {t('Войти')}

      </Button>
    </div>
  );
});
