import Color from './components/Color';
import Counter from './components/Counter';
import TodoProvider from './components/TodoContext';
import Todos from './components/Todos';
import ColorProvider from './context/ColorContext';
import CounterProvider from './context/CounterContext';

function App() {
  return (
    <>
      <CounterProvider>
        <Counter />
      </CounterProvider>
      <ColorProvider>
        <Color />
      </ColorProvider>
      <TodoProvider>
        <Todos />
      </TodoProvider>
    </>
  );
}

export default App;
