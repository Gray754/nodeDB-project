import React from 'react'
import './Weather.css'

const Weather = props =>{

    return(
        <div className="weather">
            <h3>{props.main}</h3>
            {props.description ? <img src={`http://openweathermap.org/img/w/${props.icon}.png`} alt=''/> : null}
            <p>{props.description}</p>
        </div>
    )
}

export default Weather