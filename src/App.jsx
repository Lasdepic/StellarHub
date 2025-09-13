import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//import MyConnexion from "./pages/Signin/Signin";
import Home from "./pages/Home/Home";
import Signin from "./pages/Signin/Signin";
import Account from "./pages/Account/Account";
import Post from "./pages/Post/Post";
import NotFound from "./pages/error 404/NotFound";


function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signin" element={<Signin />} />
                    <Route path="/account/:id" element={<Account/>}/>
                   <Route path="/post" element={<Post />}/> 
                   <Route path="*" element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
