import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { getLoginState } from '../../model/selectors/getLoginState';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const {
    username, password, isLoading, error
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
      <Text title={t('Форма авторизации')} />
      {error && <Text theme={TextTheme.ERROR} text={t('Неверные данные')} />}
      <Input
        value={username}
        onChange={changeUsername}
        autoFocus
        type="text"
        className={cls.input}
        placeholder={t('Введите username')}
      />
      <Input
        value={password}
        onChange={changePassword}
        type="text"
        className={cls.input}
        placeholder={t('Введите password')}
      />
      <Button
        disabled={isLoading}
        onClick={onLogin}
        theme={ButtonTheme.OUTLINE}
        className={cls.loginBtn}
      >
        {t('Войти')}

      </Button>
    </div>
  );
});
