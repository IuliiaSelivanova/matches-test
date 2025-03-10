// ответ с сервера
export interface ApiResponse {
  data: IMatchesData;
  ok: boolean;
}

// ошибка сервера
export interface ServerError {
  message: string;
  statusCode: number;
}

// данные с сервера - матчи
export interface IMatchesData {
  matches: IMatch[];
}

// матч
export interface IMatch {
  awayScore: number;
  awayTeam: ITeam;
  homeScore: number;
  homeTeam: ITeam;
  status: "Finished" | "Ongoing" | "Scheduled";
  time: string;
  title: string;
}

// команды
export interface ITeam {
  name: string;
  place: number;
  players: IPlayer[];
  points: number;
  total_kills: number;
}

// игроки
export interface IPlayer {
  kills: number;
  username: string;
}
