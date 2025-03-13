import { IPlayer } from "../../types/types";
import PlayerCard from "../PlayerCard/PlayerCard";
import "../../styles/playerList.css";
import { v4 as uuidv4 } from "uuid";

interface PlayerListProps {
  players: IPlayer[];
}

const PlayerList: React.FunctionComponent<
  PlayerListProps
> = ({ players }) => {
  return (
    <div className="playerList d-flex justify-content-between align-items-center">
      {players.map((player) => (
        <PlayerCard
          key={player.id || uuidv4()}
          player={player}
        />
      ))}
    </div>
  );
};

export default PlayerList;
