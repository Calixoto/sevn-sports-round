import { getData } from "./api";
import { setupNavigation } from "./navigation";
import { renderRound } from "./round";

export async function init() {
  try {
    const rounds = await getData();
    renderRound(0, rounds);
    setupNavigation(rounds);
  } catch (error) {
    console.error('Erro ao inicializar: ', error);
  }
}