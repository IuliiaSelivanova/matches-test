import { IMatch } from "../../types/types";
import TeamDetails from "../TeamDetails/TeamDetails";
import "../../styles/matchDetails.css";

interface MatchDetailsProps {
  match: IMatch;
}

const MatchDetails: React.FunctionComponent<
  MatchDetailsProps
> = ({ match }) => {
  return (
    <div className="matchDetais d-flex justify-content-between">
      <TeamDetails team={match.awayTeam} />
      <TeamDetails team={match.homeTeam} />
    </div>
  );
};

export default MatchDetails;
