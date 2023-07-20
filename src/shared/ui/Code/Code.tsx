import { FC, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import CodeIcon from 'shared/assets/icons/frame.svg';
import cls from './Code.module.scss';
import { Button, ButtonTheme } from '../Button';

interface CodeProps {
   className?: string;
   text: string
}

export const Code: FC<CodeProps> = (props) => {
  const { className, text } = props;

  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <pre className={classNames(cls.code, {}, [className])}>
      <Button onClick={onCopy} className={cls.copyBtn} theme={ButtonTheme.CLEAR}>
        <CodeIcon className={cls.copyIcon} />
      </Button>
      <code>{text}</code>
    </pre>
  );
};
