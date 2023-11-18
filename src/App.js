import { useState } from "react";
import AddFriends from "./AddFriends";
import ListOfFriends from "./ListOfFriends";
import Bill from "./Bill";

export default function App() {
  const friendsArr = [
    {
      id: 1,
      name: "Clark",
      img: "./dog1.jpeg",
      money: -7,
    },
    {
      id: 2,
      name: "Sarah",
      img: "./dog2.jpeg",
      money: 20,
    },
    {
      id: 3,
      name: "Anthony",
      img: "./dog3.jpg",
      money: 0,
    },
  ];

  const [friends, setFriends] = useState([...friendsArr]);
  const [openAddFriend, setOpenAddFriend] = useState(false);
  const [openBill, setOpenBill] = useState("");

  function handleAddFriends(friend) {
    setFriends(() => [...friends, friend]);
  }

  function handleUpdateFriend(id, expense) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === id ? { ...friend, money: Number(expense) } : friend
      )
    );
  }

  function handleSetBill(friend) {
    setOpenBill(friend);
  }

  return (
    <div className="content">
      <ListOfFriends
        friends={friends}
        onBill={openBill}
        onSetBill={handleSetBill}
      />

      <button
        className="btn"
        style={{ gridColumn: "1/2" }}
        onClick={() => setOpenAddFriend(!openAddFriend)}
      >
        {!openAddFriend ? "Add friend" : "Close"}
      </button>
      {openAddFriend && (
        <AddFriends
          onAddFriend={handleAddFriends}
          onOpenAddFriend={setOpenAddFriend}
        />
      )}

      {openBill && (
        <Bill
          friend={openBill}
          onSetOpenBill={handleSetBill}
          onHandleUpdateFriend={handleUpdateFriend}
        />
      )}
    </div>
  );
}
