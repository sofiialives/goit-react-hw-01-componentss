import css from './TransactinHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactions}>
      <thead>
        <tr className={css.trHead}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className={css.tBody}>
        {items.map(({ id, type, amount, currency }) => (
          <tr className={css.tr} key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
