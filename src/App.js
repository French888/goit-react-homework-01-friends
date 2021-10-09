import "./App.css";
import { Profile } from "./components/ProfileCard/ProfileCard";
import { Statistics } from "./components/Statistics/Statistics";
import { Title } from "./components/Title/Title";
import { FriendList } from "./components/Friend/FriendsList/FriendsList";
import { TransactionHistory } from "./components/Transactions/TransactionHistory";
import user from "./Data/user.json";
import statisticalData from "./Data/statisticalData.json";
import friends from "./Data/friends.json";
import transactions from "./Data/transactions.json";

const { avatar, name, location, tag, stats } = user;

console.log(statisticalData);

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
      <TransactionHistory item={transactions} />
    </div>
  );
}

export default App;
