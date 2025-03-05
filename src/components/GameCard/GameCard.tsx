import teamIcon from "../../assets/icon-team.png";
import "../../styles/gameCard.css";
import { IMatch } from "../../types/types.ts";

interface GameCardProps {
  match: IMatch;
}

type TCheckStatus = {
  classname: string;
  text: string;
};

const GameCard: React.FunctionComponent<GameCardProps> = ({
  match,
}) => {
  if (!match) return null;
  const checkStatus = (status: string): TCheckStatus => {
    switch (status) {
      case "Finished":
        return {
          classname: "gameCard__status--live",
          text: "Live",
        };
      case "Ongoing":
        return {
          classname: "gameCard__status--finished",
          text: "Finished",
        };
      case "Scheduled":
        return {
          classname: "gameCard__status--preparing",
          text: "Match preparing",
        };
      default:
        return {
          classname: "",
          text: "",
        };
    }
  };

  return (
    <section className="gameCard d-flex justify-content-between">
      <div className="gameCard__team gameCard__team--away d-flex align-items-center">
        <img src={teamIcon} alt="icon team" />
        <p>{match.awayTeam.name}</p>
      </div>

      <div className="gameCard__score d-flex flex-column justify-content-center align-items-center">
        <p>{`${match.awayScore} : ${match.homeScore}`}</p>

        <div
          className={`gameCard__status ${
            checkStatus(match.status).classname
          }`}
        >
          {checkStatus(match.status).text}
        </div>
      </div>

      <div className="gameCard__team gameCard__team--home d-flex flex-row-reverse align-items-center">
        <img src={teamIcon} alt="icon team" />
        <p>{match.homeTeam.name}</p>
      </div>
    </section>
  );
};

export default GameCard;
