import "./Account.css";

import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import CardData from "../../components/Card/CardData";
import { useEffect, useState } from "react";
import { singleUser } from "../../API/api";

export default function Account() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Récupérer l'id de l'utilisateur connecté depuis le localStorage (après login)
    const userData = localStorage.getItem("user");
    if (userData) {
      const userObj = JSON.parse(userData);
      const userId = userObj.id;
      singleUser(userId).then((data) => {
        setUser(data);
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <div>Chargement du profil...</div>;
  }

  if (!user) {
    return <div>Utilisateur non connecté.</div>;
  }

  return (
    <>
      <Header />
      <main className="accountStyle">
        <div className="image-fond">
          <img
            src={
              user.image ||
              "https://via.placeholder.com/300x100?text=Image+de+fond"
            }
            alt="image de fond"
          />
        </div>
        <section className="flexinfo">
          <div className="infoPerso">
            <div className="image-profil">
              <img
                src={
                  user.image || "https://via.placeholder.com/100?text=Profil"
                }
                alt="image-profil"
              />
            </div>
            <ul>
              <li>
                <p>
                  {user.firstName} {user.lastName}
                </p>
                <p>@{user.username}</p>
                <br />
                <p>{user.bio || user.email}</p>
              </li>
              <li>
                <p>
                  {user.address?.city}, {user.address?.state}
                </p>
                <p>{user.email}</p>
                <p>Age: {user.age}</p>
              </li>
            </ul>
            <div></div>
          </div>
          <div className="stats">
            <ul>
              <li>
                <p>POSTS</p>
                <p>{user.posts?.length || 0}</p>
              </li>
              <li>
                <p>FOLLOWING</p>
                <p></p>
              </li>
              <li>
                <p>FOLLOWERS</p>
                <p></p>
              </li>
              <li>
                <p>FAVORITES</p>
                <p></p>
              </li>
              <li>
                <button className="bouttonFollow">+Follow</button>
              </li>
            </ul>
            <CardData />
          </div>
        </section>
      </main>
      <SearchBar />
    </>
  );
}
