import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import {
  increment,
  decrement,
  incrementByAmount,
} from '../features/counterSlice';

interface iLogin {}

export default function Login({}: iLogin) {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button onClick={() => dispatch(increment())}>Увеличить</button>
        <span>{count}</span>
        <button onClick={() => dispatch(decrement())}>Уменьшить</button>
      </div>
      <div>
        <button onClick={() => dispatch(incrementByAmount(5))}>
          Увеличить на 5
        </button>
      </div>
    </div>
  );
}
