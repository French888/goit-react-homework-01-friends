import PropTypes from "prop-types";

function Statistic({ title, stats }) {
  return (
    <section className="statistics">
      {/* <h2 className="title">Upload stats</h2> */}

      <ul className="list">
        <li className="item">
          <span className="label">{title}</span>-
          <span className="percentage">{stats}</span>%
        </li>
      </ul>
    </section>
  );
}

Statistic.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.number.isRequired,
};
export default Statistic;
