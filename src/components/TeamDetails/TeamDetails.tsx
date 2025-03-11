import { ITeam } from "../../types/types";
import PlayerList from "../PlayerList/PlayerList";
import "../../styles/teamDetails.css";

interface TeamDetailsProps {
  team: ITeam;
}

const TeamDetails: React.FunctionComponent<
  TeamDetailsProps
> = ({ team }) => {
  return (
    <div className="teamDetails d-flex flex-column">
      <PlayerList players={team.players} />

      <div className="teamDetails__results d-flex ">
        <div className="teamDetails__points d-flex align-items-center">
          <p className="text--medium">Points:</p>
          <p>+{team.points}</p>
        </div>
        <div className="teamDetails__points d-flex align-items-center">
          <p className="text--medium">Место:</p>
          <p>{team.place}</p>
        </div>
        <div className="teamDetails__points d-flex align-items-center">
          <p className="text--medium">Всего убийств:</p>
          <p>{team.total_kills}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamDetails;
