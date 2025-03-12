import { IPlayer } from "../../types/types";
import avatar from "../../assets/avatar-player.png";
import "../../styles/playerCard.css";

interface PlayerCardProps {
  player: IPlayer;
}

const PlayerCard: React.FunctionComponent<
  PlayerCardProps
> = ({ player }) => {
  return (
    <div className="player d-flex justify-content-between align-items-center">
      <div className="player__username d-flex align-items-center">
        <img src={avatar} alt="avatar" />
        <p>{player.username}</p>
      </div>

      <div className="player__kills d-flex align-items-center">
        <p className="text--medium">Убийств:</p>
        <b>{player.kills}</b>
      </div>
    </div>
  );
};

export default PlayerCard;
