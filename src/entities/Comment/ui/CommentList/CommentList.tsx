import { classNames } from 'shared/lib/classNames';
import { Text } from 'shared/ui/Text';
import { useTranslation } from 'react-i18next';
import styles from './CommentList.module.scss';
import { CommentCard } from '../CommentCard/CommentCard';
import { CommentType } from '../../model/types/comment';

interface CommentListProps {
  className?: string;
  comments?: CommentType[];
  isLoading?: boolean;
}

export const CommentList = (props: CommentListProps) => {
  const { t } = useTranslation();

  const { className, comments, isLoading } = props;

  return (
    <div className={classNames(styles.commentList, {}, [className])}>
      {comments?.length ? (
        comments.map(comment => (
          <CommentCard
            isLoading={isLoading}
            className={styles.comment}
            comment={comment}
          />
        ))
      ) : (
        <Text title={t('Коменнтарии отсутствуют')} />
      )}
    </div>
  );
};
