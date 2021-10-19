import "./App.css";
import { Profile } from "../ProfileCard/ProfileCard";
import { Statistics } from "../Statistics/Statistics";
import { FriendList } from "../Friend/FriendsList/FriendsList";
import { TransactionHistory } from "../Transactions/TransactionHistory";
import user from "../../data/user.json";
import statisticalData from "../../data/statisticalData.json";
import friends from "../../data/friends.json";
import transactions from "../../data/transactions.json";

const { avatar, name, location, tag, stats } = user;

function App() {
  return (
    <div className="App">
      <h1>REACT HOMEWORK 1</h1>
      <h2>Profile</h2>
      <Profile
        name={name}
        avatar={avatar}
        location={location}
        tag={tag}
        stats={stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />;
      <h2>FriendList</h2>
      <FriendList friends={friends} />
      <h2>TransactionHistory</h2>
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
