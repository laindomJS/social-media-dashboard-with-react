import React from 'react';
import '../css/Overview.css';
import PercentCard from './PercentCard';
import iconFb from '../assets/images/icon-facebook.svg';
// import iconInsta from '../assets/images/icon-instagram.svg';
// import iconTwt from '../assets/images/icon-twitter.svg';
// import iconYt from '../assets/images/icon-youtube.svg';
import iconUpper from '../assets/images/icon-up.svg';
// import iconDowner from '../assets/images/icon-down.svg';

export default function Overview() {
    return (
        <section className="overview__section">
            <h3 className="overview__title">Overview - Today</h3>

            <div className="cards__container">

                <PercentCard 
                actionContent = "Page Views"
                iconPage = {iconFb}
                numAction = "117"
                percentClass = "total__percent up"
                iconStat = {iconUpper}
                percentNum = "3%"
                />


            </div>

        </section>
        
    )
}