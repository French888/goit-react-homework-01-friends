import Statistic from "./Statistic";

function StatisticList({ items }) {
  return (
    <ul className="list">
      {items.map((item) => (
        <li className="list-item" key={item.id}>
          <Statistic title={item.label} stats={item.percentage} />
        </li>
      ))}
    </ul>
  );
}
export default StatisticList;
