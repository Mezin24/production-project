import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const BugButton = () => {
  const [error, setError] = useState(false);
  const { t } = useTranslation();
  const onThrow = () => { setError(true); };

  useEffect(() => {
    if (error) throw new Error();
  }, [error]);

  return (
    <button type="button" onClick={onThrow}>
      {t('ошибка')}
    </button>
  );
};
