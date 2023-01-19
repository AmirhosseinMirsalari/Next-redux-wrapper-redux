import axios from "axios";
import { wrapper } from "../Redux/Store";
import { useSelector } from "react-redux";
import { getUserInfo } from "../Redux/Actions/UserActions";
import Counter from "../components/Counter";
import Link from "next/link";
import { incrementCount } from "../Redux/Actions/CounterActions";
const GetUserSsr = (props) => {
  const user = useSelector((store) => store.user.userSsr);

  return (
    <div className="box">
      <div>
        <div style={{ marginBottom: "1rem" }}>
          <h2>in Props data</h2>
          {props.user.length > 0 ? (
            props.user.map((item) => {
              return <h3 key={item.id}>{item.name}</h3>;
            })
          ) : (
            <h3>UserList is empty !</h3>
          )}
        </div>

        <div>
          <h2>in redux data</h2>
          {user.length > 0 ? (
            user.map((item) => {
              return <h3 key={item.id}>{item.name}</h3>;
            })
          ) : (
            <h3>UserList is empty !</h3>
          )}
        </div>
      </div>
      <div className="card">
        <Counter />
        <Link href="add_user">
          <a>go to Client Page</a>
        </Link>
      </div>
    </div>
  );
};

export default GetUserSsr;

export const getServerSideProps = wrapper.getServerSideProps((store) => async (context) => {
  const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");

  store.dispatch(getUserInfo(data));

  return {
    props: { user: data },
  };
});
