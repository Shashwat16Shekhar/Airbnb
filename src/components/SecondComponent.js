import React from 'react'
import Log from "./images/star.png"
import KatieImg from "./images/katie-zaferes.png"
import Wedding from "./images/wedding-photography.png"
import Bike from "./images/mountain-bike.png"

export default function SecondComponent(props){
    console.log(props);
    let iconObj =
      {"katie-zaferes.png":KatieImg  , "wedding-photography.png":Wedding, "mountain-bike.png":Bike}

    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    return(
        
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={iconObj[props.coverImg]} className="card--image" alt='pic' />
            <div className="card--stats">
                <img src={Log} alt="star" className="card--star" />
                <span>{props.stats.rating}</span>
                <span  className="gray">({props.stats.reviewCount}) • </span>
                <span  className="gray">{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}