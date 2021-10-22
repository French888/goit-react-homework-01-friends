import PropTypes from "prop-types";
import styles from "./friendsList.module.css";
import { FriendsItems } from "../FriendsItems/FriendsItems";

export function FriendList({ friends }) {
  return (
    <section className={styles.heads}>
      <ul className={styles.friend}>
        {friends.map(({ avatar, name, isOnline, id }) => (
          <li key={id} className={styles.item}>
            <FriendsItems avatar={avatar} name={name} isOnline={isOnline} />
          </li>
        ))}
      </ul>
    </section>
  );
}
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
