import "./App.css";
import CollectionCard from "./component/CollectionCard";
import Header from "./component/Header";

function App() {
  return (
    <div className="app">
      <Header />
      <CollectionCard
        id={0}
        name={"Bandana punk"}
        traits={[{ value: 7 }]}
        image="https://lh3.googleusercontent.com/p_oi7tfWbom8CyUnj4v-gJGkzeaAOjGyfgfojnhZusszQ1blEAEIVm9mlEIqCHJif52D7XVyJrqXb89l7NrmdMWPmxA1gDraCAXgIA=w600"
      />
    </div>
  );
}

export default App;
