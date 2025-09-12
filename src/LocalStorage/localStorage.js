export function saveUsers(id) {
  chargerDonnees();
  localStorage.setItem("userId", JSON.stringify(id));
}

export function chargerDonnees() {
  return JSON.parse(localStorage.getItem("userId")) || [];
}
