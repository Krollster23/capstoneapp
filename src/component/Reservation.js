import { useState } from "react"
import "./styling/Reservation.css";

export const Reservation = () => {
    const [inputs, setInputs] =useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(inputs);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label aria-required>
                Full Name:
            <input
            type="text"
            name="Firstname"
            value={inputs.Firstname || ""}
            onChange={handleChange}
            />
            </label>

            <label aria-required>
                Date:
                <input
            type="date"
            name="date"
            value={inputs.date || ""}
            onChange={handleChange}
            />
            </label>

            <label aria-required>
                Reservation Time:
                <input
            type="time"
            name="time"
            value={inputs.time || ""}
            onChange={handleChange}
            />

            <label aria-required>
                Number of Guests:
                <input
            type="number"
            name="guests"
            value={inputs.guests || ""}
            onChange={handleChange}
            />
            </label>

            <label aria-required>
                Occasion: <span></span>
            <select className="options" onChange={handleChange} aria-required>
                <option value="Select Occasion"></option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
                <option value="Business">Bussiness</option>
                <option value="Casual">Casual</option>
            </select>

            <input type="submit"></input>
            </label>
            </label>
        </form>
    );
};