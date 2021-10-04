import Friends from "./Friends";

function FriendsList({ items }) {
  return (
    <ul className="list">
      {items.map((item) => (
        <li className="list-item" key={item.id}>
          <Friends
            name={item.name}
            avatar={item.avatar}
            isOnline={item.isOnline}
          />
        </li>
      ))}
    </ul>
  );
}
export default FriendsList;
