import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import StellarHubWhite from "../../assets/StellarHubWhite.png";
import MyButton from "../../components/Button/Button";
import "./Signin.css";
import { fetchUsers, login } from "../../API/api";
import { saveUsers } from "../../LocalStorage/localStorage.js";

// login("emilys", "emilyspass");
function MyConnexion() {
  const [utilisateurs, setUtilisateurs] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    async function loadUser() {
      const data = await fetchUsers();

      setUtilisateurs(data.users || []);
    }
    loadUser();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await login(username, password);
    if (user && !user.message) {
      setError("");
      saveUsers({ id: user.id, nom: user.firstName });
      navigate("/");
    } else {
      setError("Nom d'utilisateur ou mot de passe incorrect");
    }
  };

  return (
    <main className="myLogin">
      <section>
        <img
          src={StellarHubWhite}
          alt="Logo du site"
          width="700"
          height="500"
        />
      </section>
      <section>
        <form onSubmit={handleSubmit}>
          <div className="cardsLogin">
            <p>Sign in</p>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <label htmlFor="username"></label>
            <input
              className="signin-input"
              type="text"
              id="username"
              name="username"
              placeholder="Nom d'utilisateur"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="password"></label>
            <input
              className="signin-input"
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <MyButton text="Connexion" />
          </div>
        </form>
      </section>
    </main>
  );
}

// essai de récupération

export default MyConnexion;
