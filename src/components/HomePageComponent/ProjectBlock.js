import React from "react";
import {Link} from "react-router-dom";

import "./projectBlock.css";


import SoulPanelFonts from "../../assets/img/SoulPanelFonts.jpg";
import ZooFonts from "../../assets/img/ZooFonts.jpg";
import ArmyFonts from "../../assets/img/ArmyFonts.jpg";


const ProjectBlock = () => {
    return (
        <div className="primary-block">
            <div className="block-item_1">
                <img src={SoulPanelFonts} alt=""/>

                <div className="content">
                    <h3>lorem ipsum</h3>
                    <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h1>
                    <section>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus urna senectus volutpat dui
                            a
                            convallis risus dolor. Turpis cras sem..</p>
                    </section>

                </div>
                <Link to="/SoulPanel">
                    <button className="btn-red">SoulPanel</button>
                </Link>

            </div>

            <div className="block-item_2">
                <img src={ZooFonts} alt=""/>
                <div className="content">
                    <h3>lorem ipsum</h3>
                    <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h1>
                    <section>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus urna senectus volutpat dui
                            a
                            convallis risus dolor. Turpis cras sem..</p>
                    </section>
                </div>
                <Link to="/petFamily">
                    <button className="btn-red">Pet Family</button>
                </Link>
            </div>
            <div className="block-item_3">
                <img src={ArmyFonts} alt=""/>
                <div className="content">
                    <h3>lorem ipsum</h3>
                    <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h1>
                    <section>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus urna senectus volutpat dui
                            a
                            convallis risus dolor. Turpis cras sem..</p>
                    </section>
                </div>

                <Link to="/army">
                    <button className="btn-red">Army</button>
                </Link>
            </div>

        </div>
    )
}
export default ProjectBlock;