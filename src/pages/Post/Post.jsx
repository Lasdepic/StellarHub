import SearchBar from "../../components/SearchBar/SearchBar";
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import Comment from "../../components/Comment/Comment";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Post.css";

function Post() {
    const { postId } = useParams();
    const [post, setPost] = useState(null);
    console.log(postId);
    useEffect(() => {
        fetch(`https://dummyjson.com/posts/${postId}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setPost(data);
            });
    }, [postId]);

    return (
        <>
            <Header />
            <SearchBar />
            <section className="postPage">
                {post && (
                    <Card
                        key={post.id}
                        userFirstName="deleted account"
                        userName="unknow"
                        image="https://i.pinimg.com/474x/07/c4/72/07c4720d19a9e9edad9d0e939eca304a.jpg"
                        title={post.title}
                        body={post.body}
                        tags="test"
                        likes="2343"
                        views={post.views}
                    />
                )}
                <div className="commentDiv">
                    <Comment />
                    <Comment />
                    <Comment />
                    <Comment />
                    <Comment />
                </div>
            </section>
        </>
    );
}

export default Post;
