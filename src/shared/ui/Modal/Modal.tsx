import { classNames } from 'shared/lib/classNames/classNames';
import {
  MouseEvent, ReactNode, useCallback, useEffect, useRef, useState
} from 'react';
import cls from './Modal.module.scss';
import { Portal } from '../Portal/Portal';

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean
}

const ANIMATION_DELAY = 300;

export const Modal = (props: ModalProps) => {
  const {
    children, className, isOpen, onClose, lazy = false
  } = props;

  const [isClosed, setIsClosed] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsClosed(true);
      timerRef.current = setTimeout(() => {
        setIsClosed(false);
        onClose();
      }, ANIMATION_DELAY);
    }
  }, [onClose]);

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeHandler();
    }
  }, [closeHandler]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      clearTimeout(timerRef.current);
    };
  }, [isOpen, onKeyDown]);

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  const mods: Record<string, boolean> = {
    [cls.open]: isOpen,
    [cls.closed]: isClosed,
  };

  const contentClick = (e: MouseEvent) => {
    e.stopPropagation();
  };

  if (lazy && !isMounted) return null;

  return (
    <Portal>
      <div className={classNames(cls.Modal, mods, [className,])}>
        <div className={cls.overlay} onClick={closeHandler}>
          <div className={cls.content} onClick={contentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
