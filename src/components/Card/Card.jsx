import "./Card.css";

function Card(props) {
    const randomId = Math.floor(Math.random() * 1000);
    const imageUrl = `https://picsum.photos/400/300?random=${randomId}`;

    return (
        <div className="cards">
            <img id="profilePictureCard" src={props.image} alt="" />
            <div className="contentCard">
                <ul>
                    <li>{props.userFirstName}</li>
                    <li>
                        <p>@{props.userName} • 1m ago</p>
                    </li>
                </ul>
                <article>
                    <h2>{props.title}</h2>
                    <p>
                        {props.body}
                        <span> #{props.tags}</span>
                    </p>
                    <img src={imageUrl} alt="" />
                </article>
                <ol>
                    <li>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="3rem"
                            viewBox="0 -960 960 960"
                            width="3rem"
                            fill="#e3e3e3"
                        >
                            <path d="M760-200v-160q0-50-35-85t-85-35H273l144 144-57 56-240-240 240-240 57 56-144 144h367q83 0 141.5 58.5T840-360v160h-80Z" />
                        </svg>
                    </li>

                    <li>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="3rem"
                            viewBox="0 -960 960 960"
                            width="3rem"
                            fill="#e3e3e3"
                        >
                            <path d="m600-200-56-57 143-143H300q-75 0-127.5-52.5T120-580q0-75 52.5-127.5T300-760h20v80h-20q-42 0-71 29t-29 71q0 42 29 71t71 29h387L544-624l56-56 240 240-240 240Z" />
                        </svg>
                    </li>
                    <li>
                        <p>{props.likes}</p>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="3rem"
                            viewBox="0 -960 960 960"
                            width="3rem"
                            fill="#e3e3e3"
                        >
                            <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
                        </svg>
                    </li>
                    <li>
                        <p>{props.views}</p>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="3rem"
                            viewBox="0 -960 960 960"
                            width="3rem"
                            fill="#e3e3e3"
                        >
                            <path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z" />
                        </svg>
                    </li>
                </ol>
            </div>
        </div>
    );
}

export default Card;
