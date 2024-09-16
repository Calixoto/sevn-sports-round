export interface Game {
  team_home_id: string;
  team_home_name: string;
  team_home_score: number;
  team_away_id: string;
  team_away_name: string;
  team_away_score: number;
}

export interface Round {
  round: number;
  games: Game[];
}

export async function getData() {
  const response = await fetch('https://sevn-pleno-esportes.deno.dev/');
  if (!response.ok) {
    throw new Error('Erro ao realizar busca na API');
  }
  const data: Round[] = await response.json();
  return data;
}