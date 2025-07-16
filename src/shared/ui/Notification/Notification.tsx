import { classNames } from 'shared/lib/classNames';
import { Text } from '../Text';
import styles from './Notification.module.scss';
import { Portal } from '../Portal';

interface NotificationProps {
  className?: string;
  notificationMessage?: string;
}

export const Notification = (props: NotificationProps) => {
  const { className, notificationMessage = 'Текст скопирован!' } = props;

  return (
    <Portal>
      <div className={classNames(styles.notification, {}, [className])}>
        <Text title={notificationMessage} />
      </div>
    </Portal>
  );
};
