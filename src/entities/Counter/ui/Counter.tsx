import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

export const Counter = () => {
  const counter = useSelector(getCounterValue);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const increment = () => {
    dispatch(counterActions.increment());
  };
  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <h1 data-testid="value-title">
        {counter}
      </h1>
      <Button data-testid="decrement-btn" onClick={decrement}>{t('уменьшить')}</Button>
      <Button data-testid="increment-btn" onClick={increment}>{t('увеличить')}</Button>
    </div>
  );
};
