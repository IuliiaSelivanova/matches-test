import { IMatch } from "../../types/types.ts";
import GameCard from "../GameCard/GameCard.tsx";

interface GameListProps {
  matches: IMatch[] | null;
}

const GameList: React.FunctionComponent<GameListProps> = ({
  matches,
}) => {
  return (
    <>
      {matches ? (
        matches.map((match, index) => (
          <GameCard key={index} match={match} />
        ))
      ) : (
        <div></div>
      )}
    </>
  );
};

export default GameList;
