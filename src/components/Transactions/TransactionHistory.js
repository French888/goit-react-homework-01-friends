import { TransactionItems } from "./TransactionItems";
import style from "./transactions.module.css";
import PropTypes from "prop-types";

export function TransactionHistory({ items }) {
  return (
    <table className={style.transaction}>
      <thead>
        <tr className={style.title}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className={style.content}>
        {items.map((item) => {
          const { id, type, amount, currency } = item;
          return (
            <>
              <TransactionItems
                key={id}
                type={type}
                amount={amount}
                currency={currency}
              />
            </>
          );
        })}
      </tbody>
    </table>
  );
}

TransactionHistory.prototypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
