import React from "react";
import teamIcon from "../../assets/icon-team.png";
import "../../styles/gameCard.css";
import { IMatch } from "../../types/types.ts";
import dropdownIcon from "../../assets/arrow-drop.svg";
import Score from "../Score/Score.tsx";
import MatchDetails from "../MatchDetails/MatchDetails.tsx";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/Store.ts";
import { toggleMatchOpen } from "../../Redux/features/matches/matchesSlice.ts";

interface GameCardProps {
  match: IMatch;
}

const GameCard: React.FunctionComponent<GameCardProps> = ({
  match,
}) => {
  // const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();
  const isOpen = useSelector(
    (state: RootState) =>
      state.matches.openMatchId === match.id,
  );

  if (!match) return null;

  // const handleCardClick = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <section className="gameCard">
      <div
        className="gameCard__common"
        onClick={() => dispatch(toggleMatchOpen(match.id))}
      >
        <div className="gameCard__team gameCard__team--away d-flex align-items-center">
          <img src={teamIcon} alt="icon team" />
          <p>{match.awayTeam.name}</p>
        </div>

        <div className="gameCard__score">
          <Score
            homeScore={match.homeScore}
            awayScore={match.awayScore}
            status={match.status}
          />
        </div>

        <div className="gameCard__team gameCard__team--home d-flex flex-row-reverse align-items-center">
          <img src={teamIcon} alt="icon team" />
          <p>{match.homeTeam.name}</p>
        </div>

        <div
          className={`dropDownArrow dropDownArrow--desktop ${
            isOpen && "open"
          }`}
        >
          <img src={dropdownIcon} alt="dropdown icon" />
        </div>
      </div>

      <div className="gameCard__details d-flex">
        {isOpen && <MatchDetails match={match} />}
        <div
          className={`dropDownArrow dropDownArrow--mobile ${
            isOpen && "open"
          }`}
          onClick={() =>
            dispatch(toggleMatchOpen(match.id))
          }
        >
          <img src={dropdownIcon} alt="dropdown icon" />
        </div>
      </div>
    </section>
  );
};

export default GameCard;
