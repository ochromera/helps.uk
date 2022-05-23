import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from "./routes/Home";
import Donate from "./components/Donate";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";



function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/donate" element={<Donate/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>

        </>
    )
}


export default App;