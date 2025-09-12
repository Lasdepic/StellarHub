import "./NotFound.css";
import {Link} from "react-router-dom";


function NotFound () {

return (

    <section className="cardNotFound">
        <h1 className="titre404">404 Not found</h1>
         <svg xmlns="http://www.w3.org/2000/svg" height="80px" viewBox="0 -960 960 960" width="80px" fill="#e3e3e3"><path d="m40-120 440-760 440 760H40Zm138-80h604L480-720 178-200Zm302-40q17 0 28.5-11.5T520-280q0-17-11.5-28.5T480-320q-17 0-28.5 11.5T440-280q0 17 11.5 28.5T480-240Zm-40-120h80v-200h-80v200Zm40-100Z"/></svg>
        <p className="text404">La page que vous recherchez n'existe pas</p>
        <Link to="/" className="lienRetourAccueuil">Retour à la page d'accueuil</Link>
    </section>
)

}