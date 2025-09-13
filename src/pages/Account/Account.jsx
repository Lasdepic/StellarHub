import "./Account.css";

import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import CardData from "../../components/Card/CardData";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { singleUser } from "../../API/api";


export default function Account() {
    const { id } = useParams();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const randomId = Math.floor(Math.random() * 1000);
    const imageUrl = `https://picsum.photos/400/300?random=${randomId}`;

    useEffect(() => {
        // Si un id est passé dans l'URL, on affiche ce profil, sinon on prend l'utilisateur connecté
        let userId = id;
        if (!userId) {
            const userData = localStorage.getItem("user");
            if (userData) {
                const userObj = JSON.parse(userData);
                userId = userObj.id;
            }
        }
        if (userId) {
            singleUser(userId).then((data) => {
                setUser(data);
                setLoading(false);
            });
        } else {
            setLoading(false);
        }
    }, [id]);

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
                    <img src={imageUrl} alt="image de fond" />
                </div>
                <section className="flexinfo">
                    <div className="infoPerso">
                        <div className="image-profil">
                            <img
                                src={
                                    user.image ||
                                    "https://via.placeholder.com/100?text=Profil"
                                }
                                alt="image-profil"
                            />
                        </div>
                        <ul>
                            <li>
                                {user.firstName} {user.lastName}
                            </li>
                            <li>
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
                        
                    </div>
                    <div className="stats">
                        <ul>
                            <li>
                                <p>POSTS</p>
                                <p></p>
                            </li>
                            <li>
                                <p>FOLLOWING</p>
                                <p>{(randomId / 1.5).toFixed(0)}</p>
                            </li>
                            <li>
                                <p>FOLLOWERS</p>
                                <p>{(randomId * 1.2).toFixed(0)}</p>
                            </li>
                            <li>
                                <p>FAVORITES</p>
                                <p>{(randomId / 4).toFixed(0)}</p>
                            </li>
                            <li>

                            </li>
                        </ul>
                        <CardData />
                    </div>
                </section>
                 <SearchBar />
            </main>
           
        </>
    );
}
