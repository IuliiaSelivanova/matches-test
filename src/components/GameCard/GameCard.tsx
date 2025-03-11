import teamIcon from "../../assets/icon-team.png";
import "../../styles/gameCard.css";
import { IMatch } from "../../types/types.ts";
import dropdownIcon from "../../assets/arrow-drop.svg";
import Score from "../Score/Score.tsx";
import MatchDetails from "../MatchDetails/MatchDetails.tsx";
import { useState } from "react";

interface GameCardProps {
  match: IMatch;
}

const GameCard: React.FunctionComponent<GameCardProps> = ({
  match,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  if (!match) return null;
  return (
    <section className="gameCard">
      <div
        className="gameCard__common d-flex justify-content-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="gameCard__team gameCard__team--away d-flex align-items-center">
          <img src={teamIcon} alt="icon team" />
          <p>{match.awayTeam.name}</p>
        </div>
        <Score
          homeScore={match.homeScore}
          awayScore={match.awayScore}
          status={match.status}
        />
        <div className="d-flex align-items-center">
          <div className="gameCard__team gameCard__team--home d-flex flex-row-reverse align-items-center">
            <img src={teamIcon} alt="icon team" />
            <p>{match.homeTeam.name}</p>
          </div>
          <img src={dropdownIcon} alt="dropdown icon" />
        </div>
      </div>

      {isOpen && <MatchDetails match={match} />}
    </section>
  );
};

export default GameCard;
