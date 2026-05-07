import { Card } from '$/common/components/card';
import {
  useReducer,
  useState,
  type ActionDispatch,
  type ChangeEventHandler,
  type PropsWithChildren,
} from 'react';
import { Button } from './button';
import { counterReducer, initialState, type CounterAction } from './counter-reducer';

type CounterControlsProps = {
  dispatch: ActionDispatch<[action: CounterAction]>;
};

const CounterControls = ({ dispatch }: CounterControlsProps) => {
  return (
    <div className="flex gap-2">
      <Button onClick={() => dispatch({ type: 'decrement' })}>➖ Decrement</Button>
      <Button onClick={() => dispatch({ type: 'set-count', payload: 0 })}>🔁 Reset</Button>
      <Button onClick={() => dispatch({ type: 'increment' })}>➕ Increment</Button>
    </div>
  );
};

type CounterFormProps = PropsWithChildren<{
  dispatch: ActionDispatch<[action: CounterAction]>;
}>;

const CounterForm = ({ dispatch, children }: CounterFormProps) => {
  const [draftValue, setDraftValue] = useState(0);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) =>
    setDraftValue(e.target.valueAsNumber);

  return (
    <form
      className="flex items-center gap-2"
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({ type: 'set-count', payload: draftValue });
      }}
    >
      <input
        className="ring-primary-600 focus:border-primary-800 rounded border border-slate-500 px-4 py-2 outline-none focus:ring-2"
        type="number"
        // onChange={(e) => setDraftValue(+e.target.value)}
        // onChange={(e) => setDraftValue(e.target.valueAsNumber)}
        onChange={handleChange}
        value={draftValue}
      />
      {children}
    </form>
  );
};

export const Counter = () => {
  const [count, dispatch] = useReducer(counterReducer, initialState);

  return (
    <Card className="border-primary-500 flex w-2/3 flex-col items-center gap-8">
      <h1>Days Since the Last Accident</h1>
      <p className="text-6xl">{count.count}</p>
      <CounterControls dispatch={dispatch} />
      <CounterForm dispatch={dispatch}>
        <Button>Update Counter</Button>
      </CounterForm>
    </Card>
  );
};
