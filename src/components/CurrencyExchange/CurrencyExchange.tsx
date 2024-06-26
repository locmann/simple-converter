import styles from './CurrencyExchange.module.css';
import { useSelector } from 'react-redux';
import {
  addEur,
  addUsd,
  exchangeCurrency,
  selectEur,
  selectUsd,
} from '../../features/currency/currencySlice.ts';
import { ChangeEvent } from 'react';
import { useAppDispatch } from '../../hooks/reduxHooks.ts';
function CurrencyExchange() {
  const usd = useSelector(selectUsd);
  const eur = useSelector(selectEur);

  const dispatch = useAppDispatch();

  const onChangeUsd = (element: ChangeEvent<HTMLInputElement>) => {
    dispatch(addUsd(Number(element.target.value)));
    dispatch(exchangeCurrency(true));
  };

  const onChangeEur = (element: ChangeEvent<HTMLInputElement>) => {
    dispatch(addEur(Number(element.target.value)));
    dispatch(exchangeCurrency(false));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.actionField}>
        <label className={styles.label}>USD</label>
        <input
          type="number"
          value={usd}
          onChange={onChangeUsd}
        />
      </div>
      <div className={styles.actionField}>
        <label className={styles.label}>EUR</label>
        <input
          type="number"
          value={eur}
          onChange={onChangeEur}
        />
      </div>
    </div>
  );
}

export default CurrencyExchange;
