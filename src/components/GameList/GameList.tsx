import { useSelector } from "react-redux";
import GameCard from "../GameCard/GameCard.tsx";
import { RootState } from "../../Redux/Store.ts";

const GameList: React.FunctionComponent = () => {
  // получение данных из Redux
  const matches = useSelector(
    (state: RootState) => state.matches.matches,
  );

  return (
    <div className="gameList">
      {matches.length > 0 ? (
        matches.map((match) => (
          <GameCard key={match.id} match={match} />
        ))
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default GameList;
