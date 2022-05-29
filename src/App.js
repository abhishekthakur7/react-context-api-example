import "./styles.css";
import Counter from "./Counter.component";
import Header from "./Header.component";
import CounterProvider from "./CounterContext";

export default function App() {
  return (
    <div className="App">
      <CounterProvider>
        <Header />
        <Counter />
      </CounterProvider>
    </div>
  );
}
