import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from "./routes/Home";
import Donate from "./pages/donate/Donate";
import About from "./pages/about/About";
import Projects from "./pages/project/Projects";
import Contact from "./pages/contact/Contact";




import SoulPanel from "./pages/soulPanel/SoulPanel";
import Greenhouse from "./pages/greeenhouse/Greenhouse";
import Army from "./pages/army/Army";



function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/donate" element={<Donate/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/soulPanel" element={<SoulPanel/>}/>
                <Route path="/greenhouse" element={<Greenhouse/>}/>
                <Route path="/army" element={<Army/>}/>

            </Routes>

        </>
    )
}


export default App;