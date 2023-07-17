import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Text } from 'shared/ui/Text/Text';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { getProfileReadonly, profileActions } from 'entities/Profile';
import { useCallback } from 'react';
import {
  updateProfileData
} from 'entities/Profile/model/services/updateProfileData/updateProfileData';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
   className?: string;
}
export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
  const { t } = useTranslation('profile');
  const readonly = useSelector(getProfileReadonly);
  const dispatch = useAppDispatch();

  const onEdit = useCallback(
    () => {
      dispatch(profileActions.setReadonly(false));
    },
    [dispatch]
  );

  const onCancelEdit = useCallback(
    () => {
      dispatch(profileActions.cancelEdit());
    },
    [dispatch]
  );

  const onSave = useCallback(
    () => {
      dispatch(updateProfileData());
    },
    [dispatch]
  );

  return (
    <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
      <Text title={t('Профиль')} />
      {readonly
        ? (
          <Button
            className={cls.editBtn}
            theme={ButtonTheme.OUTLINE}
            onClick={onEdit}
          >
            {t('Редактировать')}
          </Button>
        )
        : (
          <div>
            <Button
              className={cls.editBtn}
              theme={ButtonTheme.OUTLINE_RED}
              onClick={onCancelEdit}
            >
              {t('Отменить')}
            </Button>
            <Button
              className={cls.editBtn}
              theme={ButtonTheme.OUTLINE}
              onClick={onSave}
            >
              {t('Сохранить')}
            </Button>
          </div>
        )}
    </div>
  );
};