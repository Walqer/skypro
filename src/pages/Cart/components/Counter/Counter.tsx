import { useState } from "react";
import { useAppDispatch } from "../../../../hooks/redux";
import { CartSlice } from "../../../../store/reducers/cartSlice";
import "../Counter/Counter.scss";

interface ICounter {
  id: number;
  count: number;
  min: number;
  max: number;
}
const Counter: React.FC<ICounter> = ({ count, id, max, min }) => {
  const [minVal] = useState(min);
  const dispatch = useAppDispatch();
  const { increment, decrement } = CartSlice.actions;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const handleIncrement = (id: number) => {
    if (count !== max) {
      dispatch(increment(id));
    }
  };
  const handleDecrement = (id: number) => {
    if (count > minVal) {
      dispatch(decrement(id));
    }
  };
  return (
    <div className="counter">
      <input
        type="text"
        value={count}
        onChange={handleChange}
        className="counter__count"
      />

      <div className="counter__buttons">
        <button
          onClick={() => handleIncrement(id)}
          className="counter__button counter-increment"
        ></button>
        <button
          onClick={() => handleDecrement(id)}
          className="counter__button counter-decrement"
        ></button>
      </div>
    </div>
  );
};
export default Counter;
