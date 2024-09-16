import { Game, Round } from "./api";

export function renderRound (index: number, rounds: Round[]) {
  const gamesList = document.getElementById('games-list')
  const roundCount = document.getElementById('round-number')

  if(!gamesList || !roundCount) return;
  
  gamesList.innerHTML = ''
  roundCount.textContent = rounds[index].round.toString();

  rounds[index].games.forEach((game: Game) => {
    const gameElement = `
    <div class="round-content">
        <div class="team">
          <img src="/shields/${game.team_home_id}.svg" alt="${game.team_home_name}" class="team-logo">
          <span>${game.team_home_name}</span>
        </div>
        <div class="score">
          <span>${game.team_home_score}</span>
          <span>X</span>
          <span>${game.team_away_score}</span>
        </div>
        <div class="team">
          <img src="/shields/${game.team_away_id}.svg" alt="${game.team_away_name}" class="team-logo">
          <span>${game.team_away_name}</span>
        </div>
      </div>
    `
    gamesList.insertAdjacentHTML('beforeend', gameElement);
  });
} 