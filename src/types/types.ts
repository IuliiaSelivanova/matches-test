export interface ApiResponse {
  data: IMatchesData;
  ok: boolean;
}

export interface ServerError {
  message: string;
  statusCode: number;
}

export interface IMatchesData {
  matches: IMatch[];
}

export interface IMatch {
  awayScore: number;
  awayTeam: ITeam;
  homeScore: number;
  homeTeam: ITeam;
  status: "Finished" | "Ongoing" | "Scheduled";
  time: string;
  title: string;
}

export interface ITeam {
  name: string;
  place: number;
  players: IPlayer[];
  points: number;
  total_kills: number;
}

export interface IPlayer {
  kills: number;
  username: string;
}
