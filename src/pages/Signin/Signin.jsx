import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import StellarHubWhite from "../../assets/StellarHubWhite.png";
import MyButton from "../../components/Button/Button";
import "./Signin.css";
import { fetchUsers } from "../../API/api";

function MyConnexion() {
  const [utilisateurs, setUtilisateurs] = useState([]);
  const [email, setEmail] = useState("");
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = utilisateurs.find(
      (u) => u.email === email && u.password === password
    );
    if (user) {
      setError("");
  alert("Connexion réussie !");
  navigate("/home");
    } else {
      setError("Email ou mot de passe incorrect");
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
            <label htmlFor="email"></label>
            <input
              className="signin-input"
              type="email"
              id="email"
              name="email"
              placeholder="Email, phone or username"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
