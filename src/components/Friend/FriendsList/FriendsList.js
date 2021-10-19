import PropTypes from "prop-types";
import styles from "./friendsList.module.css";
import FriendsItems from "../FriendsItems/FriendsItems";

export function FriendList({ friends }) {
  return (
    <ul className={styles.friendList}>
      {friends.map((friend) => {
        const { id, name, avatar, isOnline } = friend;
        return (
          <FriendsItems
            key={id}
            name={name}
            avatar={avatar}
            isOnline={isOnline}
          />
        );
      })}
    </ul>
  );
}
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
