import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//import MyConnexion from "./pages/Signin/Signin";
import Home from "./pages/Home/Home";

function App() {
    return (
        <>
            <BrowserRouter>
                <Home />
                <Routes>
                    <Route path={`/`} element={<Home />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
