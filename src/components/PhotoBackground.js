import React from 'react';
import {Link} from 'react-router-dom';


import './photoBackground.css'
import Background from '../assets/Background.jpg';


const PhotoBackground = () => {
    return (
        <div className='wrapper_header'>
            <div className='photo_background'>
                <img src={Background} alt="" id="fonts"/>

                <div className='content'>
                    <h3>lorem ipsum</h3>
                    <h1>lorem ipsum</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida diam sed ornare auctor</p>

                    <div>
                        <Link to='/donate' className='btn'>Donate </Link>
                    </div>
                </div>
            </div>
        </div>

    )

}


export default PhotoBackground;