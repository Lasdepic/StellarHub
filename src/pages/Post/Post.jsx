import SearchBar from "../../components/SearchBar/SearchBar";
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import Comment from "../../components/Comment/Comment";
import "./Post.css";

function Post() {
    return (
        <>
        <Header />
            <SearchBar />
            <section className="postPage">
           <Card
                        key="1"
                        userFirstName="deleted account"
                        userName="unknow"
                        image="https://i.pinimg.com/474x/07/c4/72/07c4720d19a9e9edad9d0e939eca304a.jpg"
                        title="Feur coueh"
                        body="Coubeh feur feur coubeh feur feur coubeh"
                        tags="test"
                        likes="84545"
                        views="482"
                    />
                    <Comment />
                    
            </section>
        </>
    );
}

export default Post;