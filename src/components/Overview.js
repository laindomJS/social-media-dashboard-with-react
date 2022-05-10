import React from 'react';
import '../css/Overview.css';
import PercentCard from './PercentCard';
import iconFb from '../assets/images/icon-facebook.svg';
import iconInsta from '../assets/images/icon-instagram.svg';
import iconTwt from '../assets/images/icon-twitter.svg';
import iconYt from '../assets/images/icon-youtube.svg';
import iconUpper from '../assets/images/icon-up.svg';
import iconDowner from '../assets/images/icon-down.svg';

export default function Overview() {
    return (
        <section className="overview__section">
            <h3 className="overview__title" id="ov">Overview - Today</h3>

            <div className="cards__container">

                <PercentCard 
                    actionContent = "Page Views"
                    iconPage = {iconFb}
                    numAction = "52"
                    percentClass = "total__percent up"
                    iconStat = {iconUpper}
                    percentNum = "3%"
                />

                <PercentCard 
                    actionContent = "Likes"
                    iconPage = {iconFb}
                    numAction = "117"
                    percentClass = "total__percent down"
                    iconStat = {iconDowner}
                    percentNum = "2%"
                />

                <PercentCard 
                    actionContent = "Likes"
                    iconPage = {iconInsta}
                    numAction = "5462"
                    percentClass = "total__percent up"
                    iconStat = {iconUpper}
                    percentNum = "2257%"
                />

                <PercentCard 
                    actionContent = "Profile Views"
                    iconPage = {iconInsta}
                    numAction = "52k"
                    percentClass = "total__percent up"
                    iconStat = {iconUpper}
                    percentNum = "1375%"
                />

                <PercentCard 
                    actionContent = "Retweets"
                    iconPage = {iconTwt}
                    numAction = "117"
                    percentClass = "total__percent up"
                    iconStat = {iconUpper}
                    percentNum = "303%"
                />

                <PercentCard 
                    actionContent = "Likes"
                    iconPage = {iconTwt}
                    numAction = "507"
                    percentClass = "total__percent up"
                    iconStat = {iconUpper}
                    percentNum = "553%"
                />

                <PercentCard 
                    actionContent = "Likes"
                    iconPage = {iconYt}
                    numAction = "107"
                    percentClass = "total__percent down"
                    iconStat = {iconDowner}
                    percentNum = "19%"
                />

                <PercentCard 
                    actionContent = "Total Views"
                    iconPage = {iconYt}
                    numAction = "1407"
                    percentClass = "total__percent down"
                    iconStat = {iconDowner}
                    percentNum = "12%"
                />
            
            </div>

        </section>
        
    )
}