import React, {Component} from "react";
import {Link} from "react-router-dom";
import './homeBlock.css';

/* с каждого блока идет link на свою страницу
* 1 это помощь военным
* 2 это теплицы
* 3 Зеленая енергия
*
* */


class HomeBlock extends Component {
    render() {
        return (
            <div className="block">
                <div className="card-container">
                    <div className="card">
                        <img src="" alt="pussy"/>
                        <p>lorem ipsum</p>
                        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus urna senectus volutpat dui
                            a convallis risus dolor. Turpis cras sem...</p>
                        <div className="bar">
                            <Link to="/donate" className="btn-red">Donate</Link>
                        </div>
                    </div>

                    <div className="card">
                        <img src="" alt="pussy"/>
                        <p>lorem ipsum</p>
                        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus urna senectus volutpat dui
                            a convallis risus dolor. Turpis cras sem...</p>
                        <div className="bar">
                            <Link to="/donate" className="btn-red">Donate</Link>
                        </div>
                    </div>

                    <div className="card">
                        <img src="" alt="pussy"/>
                        <p>lorem ipsum</p>
                        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus urna senectus volutpat dui
                            a convallis risus dolor. Turpis cras sem...</p>
                        <div className="bar">
                            <Link to="/donate" className="btn-red">Donate</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeBlock;
