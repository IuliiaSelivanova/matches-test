// import { useEffect, useState } from "react";
// import fetchData from "./utils/fetchData";
import Header from "./components/Header/Header";
import GameList from "./components/GameList/GameList";

function App() {
  // const [matches, setMatches] = useState<object | null>(
  //   null,
  // );
  // const [error, setError] = useState<string | null>(null);

  // useEffect(() => {
  //   fetchData(
  //     "https://app.ftoyd.com/fronttemp-service/fronttemp",
  //   )
  //     .then((data) => {
  //       if (
  //         data &&
  //         data.ok &&
  //         data.data &&
  //         data.data.matches
  //       ) {
  //         setMatches(data);
  //         console.log(data);
  //       } else {
  //         setError(
  //           "Ошибка: данные отсутствуют или формат неверный.",
  //         );
  //       }
  //     })
  //     .catch((error) =>
  //       console.error("Ошибка загрузки данных", error),
  //     );
  // }, []);

  return (
    <div className="container">
      <Header />
      <GameList />
    </div>
  );
}

export default App;
