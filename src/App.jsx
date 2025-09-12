import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//import MyConnexion from "./pages/Signin/Signin";
import Home from "./pages/Home/Home";
import Signin from "./pages/Signin/Signin";
import Account from "./pages/Account/Account";
import Post from "./pages/Post/Post";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>

                    <Route path="/" element={<Home />} />
                    <Route path="/signin" element={<Signin />} />
                    <Route path="/account" element={<Account/>}/>
                   <Route path="/post" element={<Post />}/> 
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
