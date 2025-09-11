import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import "./Home.css";

function Home() {
    return (
        <>
            <Header />
            <section className="mainPage">
                <div className="topPage">
                    <h2>Latest posts</h2>
                    <button>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="45px"
                            viewBox="0 -960 960 960"
                            width="45px"
                            fill="#e3e3e3"
                        >
                            <path d="M120-240v-80h240v80H120Zm0-200v-80h480v80H120Zm0-200v-80h720v80H120Z" />
                        </svg>
                    </button>
                </div>
                <div className="postsDiv">
                    <Card />
                    <Card />
                    <Card />
                </div>
            </section>
        </>
    );
}

export default Home;
