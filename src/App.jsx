import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//import MyConnexion from "./pages/Signin/Signin";
import Home from "./pages/Home/Home";
import Signin from "./pages/Signin/Signin";


function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signin" element={<Signin />} />
                </Routes>
            </BrowserRouter>
        </>
    );

}

export default App;
