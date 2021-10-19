import PropTypes from "prop-types";
import styles from "./friendsItems.module.css";

function FriendsItems({ id, avatar, name, isOnline }) {
  return (
    <li key={id} className={styles.item}>
      {isOnline === false ? (
        <span className={styles.statusOf}>{isOnline}</span>
      ) : (
        <span className={styles.statusOn}>{isOnline}</span>
      )}
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
}

export default FriendsItems;

FriendsItems.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
