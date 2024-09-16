interface Game {
  team_home_id: string;
  team_home_name: string;
  team_home_score: number;
  team_away_id: string;
  team_away_name: string;
  team_away_score: number;
}

interface Round {
  round: number;
  games: Game[];
}

export async function getData() {
  const response = await fetch(import.meta.env.VITE_API_URL);
  const data:Round[] = await response.json();
  return data;
}