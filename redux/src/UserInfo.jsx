import { useSelector } from "react-redux";


export default function UserInfo() {
  const user = useSelector((state) => state.user);

  return (
    <div>
      <h2>Username: {user.username}</h2>
      <h2>Balance: {user.balance}</h2>
    </div>
  );
}