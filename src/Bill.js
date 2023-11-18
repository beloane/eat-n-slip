import { useState } from "react";

export default function Bill({ friend, onSetOpenBill, onHandleUpdateFriend }) {
  const [value, setValue] = useState(0);
  const [expense, setExpense] = useState(0);
  const [who, setWho] = useState("you");

  function handleSubmit(e) {
    e.preventDefault();

    if (!value) return;

    if (who === "you") onHandleUpdateFriend(friend.id, value - expense);
    if (who === "friend") onHandleUpdateFriend(friend.id, -expense);
    onSetOpenBill("");
  }

  return (
    <form className="section-bill" onSubmit={handleSubmit}>
      <h2>{`SPLIT A BILL WITH ${friend.name}`}</h2>
      <label>💰 Bill value</label>
      <input
        type="number"
        placeholder="add amount spent..."
        // value={value}
        onChange={(e) => setValue(Number(e.target.value))}
      ></input>

      <label>🕴️ Your expense</label>
      <input
        type="number"
        placeholder="add my expense..."
        // value={expense}
        onChange={(e) => setExpense(Number(e.target.value))}
      ></input>

      <label>🧑‍🤝‍🧑 Friend expense</label>
      <input
        type="text"
        value={`${value - expense}`}
        style={{ backgroundColor: "#fdf2e1", cursor: "default" }}
        readOnly
      ></input>

      <label>🤑 Who is paying the bill?</label>
      <select value={who} onChange={(e) => setWho(e.target.value)}>
        <option value="you">You</option>
        <option value="friend">{friend.name}</option>
      </select>
      <button className="btn">Split bill</button>
    </form>
  );
}
