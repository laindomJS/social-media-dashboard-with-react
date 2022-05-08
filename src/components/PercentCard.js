import React from 'react';
import '../css/PercentCard.css';

export default function PercentCard( {actionContent, iconPage, numAction, percentClass, percentNum, iconStat} ) {
    return (
        <article className="percent__card">
            
            <div className="page__visualization">
                <span class="action">{actionContent}</span>
                <img className="icon__page" src={iconPage} alt="icon page"/>
            </div>

            <div className="page__visualization">
                <span className="num__action">{numAction}</span>
                <small className={percentClass}> <img src={iconStat} className="stat__icon" alt="icon stat"/> {percentNum}</small>
            </div>

        </article>
    )
}