import React from "react";
import { TCheckStatus } from "../../types/types";
import "../../styles/score.css";

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
          classname: "score__status--live",
          text: "Live",
        };
      case "Ongoing":
        return {
          classname: "score__status--finished",
          text: "Finished",
        };
      case "Scheduled":
        return {
          classname: "score__status--preparing",
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
    <div className="score d-flex flex-column justify-content-center align-items-center">
      <p>{`${awayScore} : ${homeScore}`}</p>

      <div
        className={`score__status ${
          checkStatus(status).classname
        }`}
      >
        {checkStatus(status).text}
      </div>
    </div>
  );
};

export default Score;
