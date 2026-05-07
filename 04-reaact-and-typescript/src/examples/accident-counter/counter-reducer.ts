export type CounterState = {
  count: number;
  draftCount: number;
};

export const initialState: CounterState = {
  count: 0,
  draftCount: 0,
};

type IncrementAction = {
  type: 'increment';
};

type DecrementAction = {
  type: 'decrement';
};

type SetCountAction = {
  type: 'set-count';
  payload: number;
};

export type CounterAction = IncrementAction | DecrementAction | SetCountAction;

export const counterReducer = (state: CounterState, action: CounterAction): CounterState => {
  const { count } = state;

  switch (action.type) {
    case 'increment': {
      const newCount = count + 1;
      return { count: newCount, draftCount: newCount };
    }
    case 'decrement': {
      const newCount = count - 1;
      return { count: newCount, draftCount: newCount };
    }
    case 'set-count':
      return { count: action.payload, draftCount: action.payload };
    default:
      return state;
  }
};
