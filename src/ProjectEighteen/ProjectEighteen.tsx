import { increment, decrement, incrementByAmount } from "./counterSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
export const ProjectEighteen = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counterReducer.value);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(10))}>
        Increment by payload
      </button>
    </div>
  );
};
