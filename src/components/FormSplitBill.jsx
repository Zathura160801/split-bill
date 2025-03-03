import { useState } from "react";
import PropTypes from "prop-types";

export default function FormSplitBill({ selectedFriend, onSplitBill }) {
  const [amount, setAmount] = useState("");
  const [myBill, setMyBill] = useState("");
  const friendBill = amount ? amount - myBill : 0;
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  function handleSubmit(e) {
    e.preventDefault();
    if (!amount || !myBill) return;

    onSplitBill(whoIsPaying === "user" ? friendBill : -myBill);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Patungan Bareng si {selectedFriend.name}</h2>

      <label>💵Total Biaya</label>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <label>🙋Tagihan Kamu</label>
      <input
        type="text"
        value={myBill}
        onChange={(e) => setMyBill(e.target.value)}
      />

      <label>🙋🏽Tagihan {selectedFriend.name}</label>
      <input type="text" value={friendBill} disabled />

      <label>🤑Ditalangin sama</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">Kamu</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <button className="button">Tambah</button>
    </form>
  );
}

FormSplitBill.propTypes = {
  selectedFriend: PropTypes.object,
  onSplitBill: PropTypes.func,
};
