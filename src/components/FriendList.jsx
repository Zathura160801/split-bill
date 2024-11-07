import Friend from "./Friend";
import PropTypes from "prop-types";

export default function FriendList({ friends, onSelected, selectedFriend }) {
  return (
    <ul>
      {friends.map((friend, index) => (
        <Friend
          key={index}
          friend={friend}
          onSelected={onSelected}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.array,
  onSelected: PropTypes.func,
  selectedFriend: PropTypes.object,
};
