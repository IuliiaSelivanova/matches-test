import { IPlayer } from "../../types/types";
import PlayerCard from "../PlayerCard/PlayerCard";

interface PlayerListProps {
  players: IPlayer[];
}

const PlayerList: React.FunctionComponent<
  PlayerListProps
> = ({ players }) => {
  return (
    <div className="playerList d-flex justify-content-between align-items-center">
      {players.map((player) => (
        <PlayerCard player={player} />
      ))}
    </div>
  );
};

export default PlayerList;
