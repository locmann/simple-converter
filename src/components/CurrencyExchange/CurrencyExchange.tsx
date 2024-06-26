import styles from './CurrencyExchange.module.css';
function CurrencyExchange() {
  return (
    <div className={styles.wrapper}>
      <div>
        <label>USD</label>
        <input type="number" />
      </div>
      <div>
        <label>EUR</label>
        <input type="number" />
      </div>
    </div>
  );
}

export default CurrencyExchange;
