import "./App.css";
import GroupsTodo from "./components/GroupsTodo/GroupsTodo";
import Header from "./components/Header";
import ElementsTodo from "./components/ElementsTodo/ElementsTodo";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="todos">
        <GroupsTodo />
        <ElementsTodo />
      </div>
    </div>
  );
}

export default App;
