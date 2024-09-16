import { Round } from "./api";
import { renderRound } from "./round";

let index = 0;

export function setupNavigation(rounds: Round[]) {
  const prevButton = document.getElementById('prev-round') as HTMLButtonElement;
  const nextButton = document.getElementById('next-round') as HTMLButtonElement;

  prevButton.addEventListener('click', () => {
    if (index > 0) {
      index--;
      renderRound(index, rounds);
      updateButtonsState(rounds);
    }
  });

  nextButton.addEventListener('click', () => {
    if (index < rounds.length - 1) {
      index++;
      renderRound(index, rounds);
      updateButtonsState(rounds);
    }
  });

  function updateButtonsState(rounds: Round[]) {
    prevButton.disabled = index === 0;
    nextButton.disabled = index === rounds.length - 1;
  }

  updateButtonsState(rounds);
}