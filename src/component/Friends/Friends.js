import PropTypes from "prop-types";

function Friends({ avatar, name, isOnline }) {
  return (
    <ul className="list">
      <li className="item">
        <span className="status" style={{ color: isOnline ? "green" : "red" }}>
          O
        </span>
        <img className="avatar" src={avatar} alt={name} width="48" />
        <p className="name">{name}</p>
      </li>
    </ul>
  );
}

Friends.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default Friends;
