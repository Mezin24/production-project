import {
  ProfileCard,
  ValidateProfileErrors,
  fetchProfileData,
  getProfileError,
  getProfileForm,
  getProfileIsLoading,
  getProfileReadonly,
  getProfileValidateErrors,
  profileActions,
  profileReducer
} from 'entities/Profile';
import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import {
  DynamicModuleLoader,
  ReducerList
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { useTranslation } from 'react-i18next';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { useInitialEffects } from 'shared/lib/hooks/useInitialEffects/useInitialEffects';
import { useParams } from 'react-router';
import { Page } from 'shared/ui/Page/Page';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

interface ProfilePageProps {
  className?: string;
}

const reducers: ReducerList = {
  profile: profileReducer
};

const ProfilePage = ({ className }: ProfilePageProps) => {
  const { t } = useTranslation('profile');
  const dispatch = useAppDispatch();
  const form = useSelector(getProfileForm);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  const readonly = useSelector(getProfileReadonly);
  const validationError = useSelector(getProfileValidateErrors);
  const { id } = useParams<{id: string}>();

  useInitialEffects(() => {
    if (id) {
      dispatch(fetchProfileData(id));
    }
  });

  useEffect(() => {
  }, [dispatch]);

  const validationTranslations = {
    [ValidateProfileErrors.INDALID_USER_DATA]: t('Имя и фамилия обязательны'),
    [ValidateProfileErrors.INDALID_USER_AGE]: t('Некорректный возраст'),
    [ValidateProfileErrors.INDALID_USER_COUNTRY]: t('Некорректный регион'),
    [ValidateProfileErrors.SERVER_ERROR]: t('Серверная ошибка присохранении'),
    [ValidateProfileErrors.EMPTY_PROFILE]: t('Данные не указаны'),
  };

  const onChangeFirstname = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ name: value || '' }));
  }, [dispatch]);

  const onChangeLastname = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ lastname: value || '' }));
  }, [dispatch]);

  const onChangeAge = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ age: Number(value || 0) }));
  }, [dispatch]);

  const onChangeCity = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ city: value || '' }));
  }, [dispatch]);

  const onChangeUsername = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ username: value || '' }));
  }, [dispatch]);

  const onChangeAvatar = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ avatar: value || '' }));
  }, [dispatch]);

  const onChangeCurrency = useCallback((currency?: Currency) => {
    dispatch(profileActions.updateProfile({ currency }));
  }, [dispatch]);

  const onChangeCountry = useCallback((country?: Country) => {
    dispatch(profileActions.updateProfile({ country }));
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page className={classNames('', {}, [className])}>
        <ProfilePageHeader />
        {validationError?.length && validationError.map((err) => (
          <Text key={err} theme={TextTheme.ERROR} text={validationTranslations[err]} />
        ))}
        <ProfileCard
          data={form}
          isLoading={isLoading}
          error={error}
          readonly={readonly}
          onChangeFirstname={onChangeFirstname}
          onChangeLastname={onChangeLastname}
          onChangeAge={onChangeAge}
          onChangeCity={onChangeCity}
          onChangeUsername={onChangeUsername}
          onChangeAvatar={onChangeAvatar}
          onChangeCurrency={onChangeCurrency}
          onChangeCountry={onChangeCountry}
        />
      </Page>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
