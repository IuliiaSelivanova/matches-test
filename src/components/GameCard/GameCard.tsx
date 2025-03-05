import teamIcon from "../../assets/icon-team.png";
import "../../styles/gameCard.css";

const GameCard = () => {
  return (
    <section className="gameCard d-flex justify-content-between">
      <div className="gameCard__team gameCard__team--away d-flex align-items-center">
        <img src={teamIcon} alt="icon team" />
        <p>Command №1</p>
      </div>

      <div className="gameCard__score d-flex flex-column justify-content-center align-items-center">
        <p>2 : 1</p>
        <div className="gameCard__status gameCard__status--live">
          Live
        </div>
      </div>

      <div className="gameCard__team gameCard__team--home d-flex flex-row-reverse align-items-center">
        <img src={teamIcon} alt="icon team" />
        <p>Command №2</p>
      </div>
    </section>
  );
};

export default GameCard;
