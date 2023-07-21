import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input/Input';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
  addCommentFormActions,
  addCommentFormReducer
} from 'features/AddComentForm/model/slices/addCommentFormSlice';
import { useSelector } from 'react-redux';
import {
  getAddCommentFormText
} from 'features/AddComentForm/model/selectors/addCommentFormSelector';
import {
  DynamicModuleLoader,
  ReducerList
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import cls from './AddCommentForm.module.scss';

export interface AddCommentFormProps {
   className?: string;
   onSendComment: (text: string) => void
}

const reducers: ReducerList = {
  addCommentForm: addCommentFormReducer
};

const AddCommentForm: FC<AddCommentFormProps> = (props) => {
  const { className, onSendComment } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const text = useSelector(getAddCommentFormText);

  const onCommentTextChange = useCallback((value: string) => {
    dispatch(addCommentFormActions.setText(value));
  }, [dispatch]);

  const onSubmit = useCallback(() => {
    onSendComment(text || '');
    dispatch(addCommentFormActions.setText(''));
  }, [dispatch, onSendComment, text]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames(cls.addCommentForm, {}, [className])}>
        <Input
          value={text}
          onChange={onCommentTextChange}
          placeholder={t('Введите коментарий')}
          className={cls.input}
        />
        <Button onClick={onSubmit} theme={ButtonTheme.OUTLINE}>{t('Отправить')}</Button>
      </div>
    </DynamicModuleLoader>
  );
};

export default AddCommentForm;
