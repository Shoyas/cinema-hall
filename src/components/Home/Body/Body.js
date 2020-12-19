import React from 'react';
import { Link } from 'react-router-dom';
import './Body.css';

const Body = (props) => {
    const item = props.itm;
    const {id, name, image, date, time} = item;

    
    return (
        <div className="col-md-3">
            <div className="cart-item">
                <Link to={`/login/${name}`} id="pace-link">
                    <img src={image} alt=""/>
                    <div className="space">
                        <h5>{name}</h5>
                        <h5>{date}</h5>
                        <h5>{time}</h5>
                    </div>   
                </Link>
            </div>     
        </div>
    );
};

export default Body;