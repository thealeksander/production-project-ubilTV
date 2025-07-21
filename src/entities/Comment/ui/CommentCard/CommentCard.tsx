import { classNames } from 'shared/lib/classNames';
import { Avatar } from 'shared/ui/Avatar';
import { Text } from 'shared/ui/Text';
import { Skeleton } from 'shared/ui/Skeleton';
import { memo } from 'react';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import styles from './CommentCard.module.scss';
import { CommentType } from '../../model/types/comment';

interface CommentCardProps {
  className?: string;
  comment?: CommentType;
  isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
  const { className, comment, isLoading } = props;

  if (isLoading) {
    return (
      <div className={classNames(styles.commentCard, {}, [className])}>
        <div className={styles.header}>
          <Skeleton width={30} height={30} border="50%" />
          <Skeleton height={16} width={100} className={styles.userName} />
        </div>
        <Skeleton className={styles.text} width="100%" height={50} />
      </div>
    );
  }

  if (!comment) {
    return null;
  }

  return (
    <div className={classNames(styles.commentCard, {}, [className])}>
      <AppLink
        to={`${RoutePath.PROFILE}${comment.user.id}`}
        className={styles.header}
      >
        {comment.user.avatar && <Avatar size={30} src={comment.user.avatar} />}
        <Text className={styles.userName} title={comment.user.username} />
      </AppLink>
      <Text className={styles.text} text={comment.text} />
    </div>
  );
});
