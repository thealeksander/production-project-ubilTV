import { classNames } from 'shared/lib/classNames';
import CopyIcon from 'shared/assets/icons/copyIcon.svg';
import { memo, useCallback, useState } from 'react';
import { Notification } from 'shared/ui/Notification';
import styles from './Code.module.scss';
import { Button } from '../Button';
import { ButtonTheme } from '../Button/Button';

interface CodeProps {
  className?: string;
  text: string;
}

export const Code = memo((props: CodeProps) => {
  const { className, text } = props;
  const [showNotification, setShowNotification] = useState(false);

  const onCopy = useCallback(() => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 6000);
      })
      .catch(err => {
        console.error('Не удалось скопировать текст: ', err);
      });
  }, [text]);

  return (
    <>
      <pre className={classNames(styles.code, {}, [className])}>
        <Button
          className={styles.copyBtn}
          onClick={onCopy}
          theme={ButtonTheme.CLEAR}
        >
          <CopyIcon className={styles.copyIcon} />
        </Button>
        <code>{text}</code>
      </pre>
      {showNotification && <Notification />}
    </>
  );
});
