import { classNames } from 'shared/lib/classNames';
import { Input } from 'shared/ui/Input';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import { ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import {
  ReducerList,
  useDynamicModuleLoader,
} from 'shared/lib/hooks/useDynamicModuleLoader';
import { HStack } from 'shared/ui/Stack';
import styles from './AddCommentForm.module.scss';
import {
  getAddCommentFormError,
  getAddCommentFormText,
} from '../module/selectors/addCommentFormSelectors';
import {
  addCommentFormActions,
  addCommentFormReducer,
} from '../module/slices/addCommentFormSlice';

export interface AddCommentFormProps {
  className?: string;
  onSendComment: (text: string) => void;
}

const reducers: ReducerList = {
  addCommentForm: addCommentFormReducer,
};

const AddCommentForm = (props: AddCommentFormProps) => {
  const { className, onSendComment } = props;

  const { t } = useTranslation();
  useDynamicModuleLoader({ reducers });

  const text = useSelector(getAddCommentFormText);
  const error = useSelector(getAddCommentFormError);
  const dispatch = useAppDispatch();

  const onCommnetTextChange = useCallback(
    (value: string) => {
      dispatch(addCommentFormActions.setText(value));
    },
    [dispatch],
  );

  const onSendHandler = useCallback(() => {
    onSendComment(text || '');
    onCommnetTextChange('');
  }, [onSendComment, onCommnetTextChange, text]);

  return (
    <HStack
      justify="between"
      max
      className={classNames(styles.addCommentForm, {}, [className])}
    >
      <Input
        className={styles.input}
        placeholder={t('Введите текст комментария')}
        value={text}
        onChange={onCommnetTextChange}
      />
      <Button onClick={onSendHandler} theme={ButtonTheme.OUTLINE}>
        {t('Отправить')}
      </Button>
    </HStack>
  );
};

export default AddCommentForm;
