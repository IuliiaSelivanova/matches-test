import React from "react";
import { TCheckStatus } from "../../types/types";

interface ScoreProps {
  homeScore: number;
  awayScore: number;
  status: string;
}

const Score: React.FunctionComponent<ScoreProps> = ({
  homeScore,
  awayScore,
  status,
}) => {
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
    <div className="gameCard__score d-flex flex-column justify-content-center align-items-center">
      <p>{`${awayScore} : ${homeScore}`}</p>

      <div
        className={`gameCard__status ${
          checkStatus(status).classname
        }`}
      >
        {checkStatus(status).text}
      </div>
    </div>
  );
};

export default Score;
