import React from 'react';
import banner from '../../images/banner.jpg';
import './Header.css';

const Header = () => {
    return (
        <section className='row header-content container-fluid'>
            <div className="col-md-5 offset-1 text-area">
                <h3>Booking Your <br/> Ticket <br/> For Entry</h3>
                <h2>Chinema Hall</h2>
                
            </div>
            <div className="col-md-6">
                <img className="img-fluid " src={banner} alt=""/>
            </div>    
        </section>
    );
};

export default Header;