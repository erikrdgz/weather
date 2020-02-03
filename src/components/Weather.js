import React from "react";

const Weather = props => (
    <div className="weather-data">
        {props.city && props.country && <p>
            Location: <span className="text-white">{props.city}</span> , <span className="text-white">{props.country}</span>
        </p>}

        {props.temperature && <p>
            Temperature: <span className="text-white">{props.temperature} &deg;</span> 
        </p>}

        {props.humidity && <p>
            Humidity: <span className="text-white">{props.humidity}</span> 
        </p>}

        {props.description && <p>
            Conditions:  <span className="text-white">{props.description}</span>
        </p>}

        {props.error && <p className="text-danger">{props.error}</p>}
    </div>
);

export default Weather;