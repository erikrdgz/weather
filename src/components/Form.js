import React from "react";


const Form = props => (
    <form className="p-2" onSubmit={props.getWeather}>
        <label className="text-main">
            City
            <input className="" type="text" name="city" placeholder="Enter City" />
        </label>
        
        <label className="text-main">
            Country
            <input className="" type="text" name="country" placeholder="Enter Country" />
        </label>
        <button className="btn btn-custom float-lg-right my-4">Get Weather</button>
    </form>

);

export default Form;