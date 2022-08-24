import SearchImages from "./components/SearchImages";
import { ReactComponent as Tretton37Logo } from "./static/icons/1337.svg";
import "./styles/App.css";

function App() {
  return (
    <div className="l-app__container">
      <header>
        <h1 className="l-app__header">
          <Tretton37Logo />
        </h1>
      </header>
      <main>
        <SearchImages />
      </main>
      <footer>tretton37</footer>
    </div>
  );
}

export default App;
