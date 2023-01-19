import Link from "next/link";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Counter from "../components/Counter";
import { addUserInfo } from "../Redux/Actions/UserActions";

const AddUserClient = () => {
  const [value, setValue] = useState("");
  const user = useSelector((store) => store.user.userClient);
  const dispatch = useDispatch();

  return (
    <div className="box">
      <div>
        <div>
          <input
            style={{ marginRight: "0.5rem" }}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button disabled={!value} onClick={() => dispatch(addUserInfo(value))}>
            Add user
          </button>
        </div>

        {user.length > 0 ? (
          user.map((item, index) => {
            return <h3 key={index}>{item}</h3>;
          })
        ) : (
          <h3>userList is empty !</h3>
        )}
      </div>

      <div className="card">
        <Counter />
        <Link href="get_user">
          <a>go to SSR Page</a>
        </Link>
      </div>
    </div>
  );
};

export default AddUserClient;
