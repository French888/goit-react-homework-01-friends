import Transaction from "./Transaction";

function TransactionHistory({ items }) {
  return (
    <ul className="">
      {items.map((item) => (
        <li className="list-item" key={item.id}>
          <Transaction
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        </li>
      ))}
    </ul>
  );
}
export default TransactionHistory;
