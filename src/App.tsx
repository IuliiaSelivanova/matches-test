import { useEffect } from "react";
import Header from "./components/Header/Header";
import GameList from "./components/GameList/GameList";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "matches/connect" });
  }, [dispatch]);

  return (
    <div className="app">
      <Header />
      <GameList />
    </div>
  );
}

export default App;
