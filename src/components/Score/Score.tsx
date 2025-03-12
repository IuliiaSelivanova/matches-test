import "../../styles/score.css";
import { formatStatus } from "../../utils/formatStatus";
import { motion } from "framer-motion";

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
    <motion.div className="score d-flex flex-column justify-content-center align-items-center">
      <motion.p
        key={`${homeScore}-${awayScore}`}
        initial={{ scale: 1.2, opacity: 0.7 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >{`${awayScore} : ${homeScore}`}</motion.p>

      <div
        className={`score__status ${
          formatStatus(status).classname
        }`}
      >
        {formatStatus(status).text}
      </div>
    </motion.div>
  );
};

export default Score;
