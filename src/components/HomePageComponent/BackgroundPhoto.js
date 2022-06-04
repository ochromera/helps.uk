import React from 'react';
import "./backgroundphoto.css";
import Background from '../../assets/img/Backgound2.png';
import ProjectBlock from "./ProjectBlock";
import {Link} from "react-router-dom";
import Donate from "../../pages/donate/Donate";



const BackgroundPhoto = () => {
    return (
        <div className="background">
            <div >
                <img src={Background} alt="" />
            </div>
            <div className="background-content">
                <h3>lorem ipsum</h3>
                <h1>lorem ipsum</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida diam sed ornare auctor</p>
            </div>
            <Link to="/donate"><button className="btn">Donate</button></Link>

            <ProjectBlock />

        </div>
    );
};

export default BackgroundPhoto;