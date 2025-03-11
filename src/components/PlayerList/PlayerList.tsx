import { IPlayer } from "../../types/types";
import PlayerCard from "../PlayerCard/PlayerCard";
import "../../styles/playerList.css";

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
