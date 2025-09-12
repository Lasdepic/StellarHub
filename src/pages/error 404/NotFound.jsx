import "./NotFound.css";
import {Link} from "react-router-dom";


function NotFound () {

return (

    <section className="cardNotFound">
        <div className="divNotFound"> 
            <img className="logoStellarHub" src="src/assets/StellarHubWhite.png" alt="logo stellarhub" />
            
            </div>
       
        <img src="https://www.pornhub.com/dist/images/france.47680b8261ac8b28b3205ebd6f9aad1b.png" alt="" />
        <h1 className="titre404">404 Not found </h1>
        <p className="text404">La page que vous recherchez n'existe pas</p>
        <Link to="/" className="lienRetourAccueuil">Retour à la page d'accueuil</Link>
    </section>
)

}

export default NotFound