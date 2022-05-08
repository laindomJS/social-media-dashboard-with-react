import React from 'react';
import '../css/Card.css';

export default function Card( {classname, icon, name, followers, cardContent, today, todayIcon, todayclassname} ) {
    return (
        <article className={classname}>

            <div className="social__net">
                <img src={icon} className="icon"  alt="icon"/>
                <span className="username">{name}</span>
            </div>

            <div className="followers__show">
                <h2 className="numbers">{followers}</h2>
                <span className="card__content">{cardContent}</span>
            </div>

            <small class={todayclassname}> <img className="todayIcon" src={todayIcon} alt="today followers"/> {today} </small>

        </article>
    )
}