import { fetchPost, fetchUsers } from "../../API/api";
import { useState, useEffect } from "react";
import Card from "./Card";

function CardData() {
    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function loadPosts() {
            const postsData = await fetchPost();
            setPosts(postsData.posts);
        }
        loadPosts();
    }, []);

    useEffect(() => {
        async function loadUsers() {
            const usersData = await fetchUsers();
            setUsers(usersData.users);
        }
        loadUsers();
    }, []);
    return (
        <div className="postsDiv">
            {posts.map((elem) => {
                const foundUser = users.find(
                    (element) => element.id === elem.userId
                );
                return (
                    <Card
                        key={elem.id}
                        userFirstName={
                            foundUser ? foundUser.firstName : "deleted account"
                        }
                        userName={foundUser ? foundUser.username : "unknow"}
                        image={
                            foundUser
                                ? foundUser.image
                                : "https://i.pinimg.com/474x/07/c4/72/07c4720d19a9e9edad9d0e939eca304a.jpg"
                        }
                        title={elem.title}
                        body={elem.body}
                        tags={elem.tags}
                        likes={elem.reactions.likes}
                        views={elem.views}
                    />
                );
            })}
        </div>
    );
}

export default CardData;
