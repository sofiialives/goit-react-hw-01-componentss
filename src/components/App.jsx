import { Profile } from './Profile/Profile';
import user from 'user.json';
import { Statistics } from './Stats/Statistics';
import data from 'data.json';
import { FriendList } from './Friends/FriendList';
import friends from 'friends.json';
import { TransactionHistory } from './Transactions/TransactionHistory';
import transactions from 'transactions.json'

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />;
    </div>
  );
};
