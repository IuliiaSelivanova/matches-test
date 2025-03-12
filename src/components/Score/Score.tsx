import React from "react";

import "../../styles/score.css";
import { formatStatus } from "../../utils/formatStatus";

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
  return (
    <div className="score d-flex flex-column justify-content-center align-items-center">
      <p>{`${awayScore} : ${homeScore}`}</p>

      <div
        className={`score__status ${
          formatStatus(status).classname
        }`}
      >
        {formatStatus(status).text}
      </div>
    </div>
  );
};

export default Score;
