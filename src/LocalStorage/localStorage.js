export function saveUsers(user) {
  localStorage.setItem("user", JSON.stringify(user));
}

export function chargerDonnees() {
  return JSON.parse(localStorage.getItem("user")) || null;
}
