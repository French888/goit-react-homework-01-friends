import PropTypes from "prop-types";
import { StatisticsItem } from "./StatisticsItem/StatisticsItem";
import styles from "./statistics.module.css";

export function StatisticsList({ statistics, title }) {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles.statList}>
        {statistics.map(({ id, label, percentage }) => {
          return (
            <li key={id} className={styles.item}>
              <StatisticsItem label={label} percentage={percentage} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}

StatisticsList.defaultProps = {
  title: "Default text",
};

StatisticsList.propType = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
