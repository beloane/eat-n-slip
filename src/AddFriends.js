import { useState } from "react";

export default function AddFriends({ onAddFriend, onOpenAddFriend }) {
  const [friendName, setFriendName] = useState("");
  const [friendImg, setFriendImg] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault();

    if (!friendName && !friendImg) return;

    const newFriend = {
      name: friendName,
      img: friendImg,
      money: 0,
      id: Date.now(),
    };

    onAddFriend(newFriend);
    onOpenAddFriend(false);
  }

  return (
    <form
      className="section-add"
      onSubmit={handleSubmit}
      style={{ gridColumn: "1/2" }}
    >
      <label>👨‍👩‍👧‍👦 Friend name</label>
      <input
        type="text"
        placeholder="Name..."
        value={friendName}
        onChange={(e) => setFriendName(e.target.value)}
      ></input>

      <label>🖼️ Image URL</label>
      <input
        type="text"
        placeholder="url..."
        value={friendImg}
        onChange={(e) => setFriendImg(e.target.value)}
      ></input>
      <button className="btn">Add</button>
    </form>
  );
}
