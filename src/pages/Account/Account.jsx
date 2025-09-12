import "./Account.css";
import Header from "../../components/Header/Header";
import Home from "../Home/Home";

export default function Account() {
  return (
    <>
      <Header/>
      <main className="accountStyle">
        <div className="image-fond">
          <img src="mm" alt="image de fond" />
        </div>

        <section className="flexinfo">
            <div className="infoPerso">
          <div className="image-profil">
            <img src="mm" alt="image-profil" />
          </div>
          <ul>
            <li>
              <p>わおくす</p>
              <p>@deafiaa</p>
              <br />
              <p>Lorem ipsum feur coubeh coubeh feur na coubite voubeh tete retricoter UwU</p>
            </li>
            <li>
                <p>
Los Angeles, CA
                </p>
                  <p>
                    notion.tututfdp/31967.gouv.ru
                </p>
                  <p>
                    Joined August 2015
                </p>
            </li>
          </ul>
          <div>
            
          </div>
          </div>
       

        <div className="stats">
          <ul>
            <li>
              <p>POSTS</p>
              
              <p>2.416</p>
            </li>
            <li>
              <p>FOLLOWING</p>
              
              <p>243</p>
            </li>
            <li>
              <p>FOLLOWERS</p>
             
              <p>423M</p>
            </li>
            <li>
              <p>FAVORITES</p>
             
              <p>136</p>
            </li>
            <li>
              <button className="+follow">+ Follow</button>
            </li>
          </ul>
          </div>
        </section>
      </main>
{/* 
      <Home /> */}
    </>
  );
}
