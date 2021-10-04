import "./App.css";
import Profile from "./component/Profile/Profile";
import FriendList from "./component/Friends/FriendList";
import StatisticList from "./component/Statistic/StatisticList";
import TransactionHistory from "./component/Transaction/TransactionHistory";
import profile from "./component/Profile/profile.json";
import friends from "./component/Friends/friends.json";
import statistic from "./component/Statistic/statistic.json";
import transactions from "./component/Transaction/transaction.json";
function App() {
  return (
    <div>
      <h1>REACT => HOME WORK 1 </h1>
      <h2>Profile user</h2>
      <Profile
        name={profile.name}
        tag={profile.tag}
        location={profile.location}
        avatar={profile.avatar}
        followers={profile.stats.followers}
        views={profile.stats.views}
        likes={profile.stats.likes}
      />
      <h2>Friend list</h2>
      <FriendList items={friends} />
      <h2>"Upload stats"</h2>
      <StatisticList items={statistic} />
      <h2>Transaction</h2>
      <TransactionHistory items={transactions} />;
    </div>
  );
}

export default App;
