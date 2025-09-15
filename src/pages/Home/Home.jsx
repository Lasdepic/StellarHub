import Header from "../../components/Header/Header";
import CardData from "../../components/Card/CardData";
import SearchBar from "../../components/SearchBar/SearchBar";

import "./Home.css";

function Home() {
    return (
        <>
            <Header />
            <SearchBar />
            <section className="mainPage">
                <div className="topPage">
                    <h2 className="Latest-posts">Latest Posts</h2>
                    <a>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="45px"
                            viewBox="0 -960 960 960"
                            width="45px"
                            fill="#e3e3e3"
                        >
                            <path d="M120-240v-80h240v80H120Zm0-200v-80h480v80H120Zm0-200v-80h720v80H120Z" />
                        </svg>
                    </a>
                </div>
                <CardData />
            </section>
        </>
    );
}

export default Home;
