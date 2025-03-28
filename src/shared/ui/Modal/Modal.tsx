import { FC, ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { classNames } from 'shared/lib/classNames';
import styles from './Modal.module.scss';
import { Portal } from '../Portal';

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

const ANIMATION_DELLAY = 300;

export const Modal: FC<ModalProps> = ({
  className,
  children,
  isOpen,
  onClose,
}) => {
  const [isClosing, setIsClosing] = useState(false);
  const timeRef = useRef<ReturnType<typeof setTimeout>>();

  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  console.log('render');

  const onCloseHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timeRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANIMATION_DELLAY);
    }
  }, [onClose]);

  const onKeyDowm = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onCloseHandler();
      }
    },
    [onCloseHandler],
  );

  const mods: Record<string, boolean> = {
    [styles.opened]: isOpen,
    [styles.isClosing]: isClosing,
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDowm);
    }

    return () => {
      clearTimeout(timeRef.current);
      window.removeEventListener('keydown', onKeyDowm);
    };
  }, [isOpen, onKeyDowm]);

  return (
    <Portal>
      <div className={classNames(styles.modal, mods, [className])}>
        <div className={styles.overlay} onClick={onCloseHandler}>
          <div className={styles.content} onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
