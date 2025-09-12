import "./Account.css";
import Header from "../../components/Header/Header";
// import Home from "../Home/Home";
import SearchBar from "../../components/SearchBar/SearchBar";
import CardData from "../../components/Card/CardData";

export default function Account() {
  return (
    <>
      <Header />

      <main className="accountStyle">
        <div className="image-fond">
          <img
            src="https://scontent-cdg4-1.xx.fbcdn.net/v/t39.30808-6/475033021_921559946629502_6359739391899699344_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Qvky4Ed6-AgQ7kNvwF-L3xC&_nc_oc=AdnXTFj7YPcx6ryetEvsf7QUZAE2UckiLPgVDeTuL9E9Gp4Q5WfkGG11vUJtFOrGBeA&_nc_zt=23&_nc_ht=scontent-cdg4-1.xx&_nc_gid=_E9Hk8rTCXxvl9rS9m02wQ&oh=00_AfZoMw-4GhyRk2AckRgpCMod8Y97xyr0Qws5v50GjfFwJQ&oe=68C9C74C"
            alt="image de fond"
          />
        </div>

        <section className="flexinfo">
          <div className="infoPerso">
            <div className="image-profil">
              <img
                src="https://pbs.twimg.com/media/F0c0sY5WYAIKyPz.jpg"
                alt="image-profil"
              />
            </div>
            <ul>
              <li>
                <p>わおくす</p>
                <p>@deafiaa</p>
                <br />
                <p>
                  Lorem ipsum feur coubeh coubeh feur na coubite voubeh tete
                  retricoter UwU
                </p>
              </li>
              <li>
                <p>Los Angeles, CA</p>
                <p>notion.tututfdp/31967.gouv.ru</p>
                <p>Joined August 2015</p>
              </li>
            </ul>
            <div></div>
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
                <button className="bouttonFollow">+Follow</button>
              </li>
            </ul>
             <CardData />
          </div> 
          
        </section>
      
      </main>

      <SearchBar />
      {/* <Home /> */}
    </>
  );
}
