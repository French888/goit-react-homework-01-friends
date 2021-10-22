import PropTypes from "prop-types";
import styles from "./friendsItems.module.css";

export function FriendsItems({ avatar, name, isOnline }) {
  return (
    <>
      <span className={isOnline ? styles.statusOn : styles.statusOf}></span>
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
    </>
  );
}

FriendsItems.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
