import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import MyButton from "../Button/Button";
import { useEffect, useState } from "react";
import { chargerDonnees } from "../../LocalStorage/localStorage.js";

function Header() {
  const user = chargerDonnees();

const redirection = useNavigate();
const deconnexion = () => {
  localStorage.removeItem("user");
  redirection("/Signin")
};


  return (
    <header>
      <img src="src/assets/StellarHubWhite.png" alt="logo stellarhub" />
      <nav>
        <ul>
          <li>
            <Link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="35px"
                viewBox="0 -960 960 960"
                width="35px"
                fill="#e3e3e3"
              >
                <path d="M160-120v-375l-72 55-48-64 440-336 440 336-48 63-72-54v375H160Zm80-80h480v-356L480-739 240-556v356Zm0 0h480-480Zm80-160q-17 0-28.5-11.5T280-400q0-17 11.5-28.5T320-440q17 0 28.5 11.5T360-400q0 17-11.5 28.5T320-360Zm160 0q-17 0-28.5-11.5T440-400q0-17 11.5-28.5T480-440q17 0 28.5 11.5T520-400q0 17-11.5 28.5T480-360Zm160 0q-17 0-28.5-11.5T600-400q0-17 11.5-28.5T640-440q17 0 28.5 11.5T680-400q0 17-11.5 28.5T640-360Z" />
              </svg>
              Home
            </Link>
          </li>
          <li>
            <Link to="/Freinds">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="35px"
                viewBox="0 -960 960 960 "
                width="35px"
                fill="#e3e3e3"
              >
                <path d="M40-160v-160q0-34 23.5-57t56.5-23h131q20 0 38 10t29 27q29 39 71.5 61t90.5 22q49 0 91.5-22t70.5-61q13-17 30.5-27t36.5-10h131q34 0 57 23t23 57v160H640v-91q-35 25-75.5 38T480-200q-43 0-84-13.5T320-252v92H40Zm440-160q-38 0-72-17.5T351-386q-17-25-42.5-39.5T253-440q22-37 93-58.5T480-520q63 0 134 21.5t93 58.5q-29 0-55 14.5T609-386q-22 32-56 49t-73 17ZM160-440q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T280-560q0 50-34.5 85T160-440Zm640 0q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T920-560q0 50-34.5 85T800-440ZM480-560q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-680q0 50-34.5 85T480-560Z" />
              </svg>
              Friends
            </Link>
          </li>
          <li>
            <a href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="35px"
                viewBox="0 -960 960 960"
                width="35px"
                fill="#e3e3e3"
              >
                <path d="M160-80v-560q0-33 23.5-56.5T240-720h320q33 0 56.5 23.5T640-640v560L400-200 160-80Zm80-121 160-86 160 86v-439H240v439Zm480-39v-560H280v-80h440q33 0 56.5 23.5T800-800v560h-80ZM240-640h320-320Z" />
              </svg>
              Bookmarks
            </a>
          </li>
          <li className="btnProfil">
            <img
              className="imageUser"
              src={user.image}
              alt="photo de l'utilisateur"
            />
            <Link to="/account">Profile</Link>
          </li>
          <li>
            <a href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="35px"
                viewBox="0 -960 960 960"
                width="35px"
                fill="#e3e3e3"
              >
                <path d="M280-420q25 0 42.5-17.5T340-480q0-25-17.5-42.5T280-540q-25 0-42.5 17.5T220-480q0 25 17.5 42.5T280-420Zm200 0q25 0 42.5-17.5T540-480q0-25-17.5-42.5T480-540q-25 0-42.5 17.5T420-480q0 25 17.5 42.5T480-420Zm200 0q25 0 42.5-17.5T740-480q0-25-17.5-42.5T680-540q-25 0-42.5 17.5T620-480q0 25 17.5 42.5T680-420ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
              </svg>
              More
            </a>
          </li>
          <li>
            <MyButton className="bouttonPost" text="Post" />
          </li>
          <li><MyButton className="bouttonDeconnexion" text="déconnexion" onClick={()=> deconnexion()} /></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
