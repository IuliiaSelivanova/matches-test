import teamIcon from "../../assets/icon-team.png";

const GameCard = () => {
  return (
    <section className="card">
      <div className="card__team">
        <img src={teamIcon} alt="icon team" />
        <p>Command №1</p>
      </div>

      <div className="card__score">
        <p>2 : 1</p>
        <div className="card__status">Live</div>
      </div>

      <div className="card__team">
        <img src={teamIcon} alt="icon team" />
        <p>Command №2</p>
      </div>
    </section>
  );
};

export default GameCard;
