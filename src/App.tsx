import { Counter } from './bases/Counter';
import { CounterBy } from './bases/CounterBy';

function App() {
  return (
    <>
      <Counter initialValue={0} />
      <CounterBy initialValue={15} />
    </>
  );
}

export default App;
