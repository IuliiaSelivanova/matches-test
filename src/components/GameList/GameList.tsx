import { useDispatch, useSelector } from "react-redux";
import GameCard from "../GameCard/GameCard.tsx";
import { RootState } from "../../Redux/Store.ts";
import { toggleMatch } from "../../Redux/features/matches/matchesSlice.ts";

const GameList: React.FunctionComponent = () => {
  // получение данных из Redux
  const matches = useSelector(
    (state: RootState) => state.matches.matches,
  );
  const dispatch = useDispatch();
  const isOpenMatches = useSelector(
    (state: RootState) => state.matches.isOpenMatches,
  );

  return (
    <div className="gameList">
      {matches.length > 0 ? (
        matches.map((match) => (
          <GameCard
            key={match.id}
            match={match}
            isOpen={!!isOpenMatches[match.id]}
            toggleMatch={() =>
              dispatch(toggleMatch(match.id))
            }
          />
        ))
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default GameList;
