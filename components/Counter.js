import { useSelector, useDispatch } from "react-redux";
import { incrementCount } from "../Redux/Actions/CounterActions";

const Counter = () => {
  const count = useSelector((store) => store.counter.count);
  const dispatch = useDispatch();
  return (
    <div>
      count : {count}
      <button style={{ marginLeft: "1rem" }} onClick={() => dispatch(incrementCount())}>
        Add One
      </button>
    </div>
  );
};

export default Counter;
