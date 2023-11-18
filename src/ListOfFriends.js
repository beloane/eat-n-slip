import Bill from "./Bill";

export default function ListOfFriends({ friends, onBill, onSetBill }) {
  return (
    <div className="section-ppl">
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          onBill={onBill}
          onSetBill={onSetBill}
        />
      ))}
    </div>
  );
}

function Friend({ friend, onBill, onSetBill }) {
  return (
    <div className="friend">
      <div className="friend-image">
        <img src={friend.img} alt={friend.name}></img>
      </div>
      <div className="friend-details">
        <h1>{friend.name}</h1>
        {!friend.money ? (
          <p>{`You and ${friend.name} are even`}</p>
        ) : friend.money > 0 ? (
          <p style={{ color: "green" }}>{`${friend.name} owes you ${Math.abs(
            friend.money
          )}`}</p>
        ) : (
          <p style={{ color: "red" }}>{`You owe ${friend.name} ${Math.abs(
            friend.money
          )}`}</p>
        )}
      </div>
      <button
        className="btn"
        onClick={() => {
          friend.id !== onBill.id ? onSetBill(friend) : onSetBill("");
        }}
      >
        Select
      </button>
    </div>
  );
}
