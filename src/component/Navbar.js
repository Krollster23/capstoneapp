import { Link } from "react-router-dom";

export default function Navbar() {
    return (
    <nav classname="nav">
        <img src="./images/logo.png" className="navbar-img" alt="Logo"></img>
        <Link to="/Home">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Menu">Menu</Link>
        <Link to="/Reservation">Reservation</Link>
        <Link to="/ReservationOnline">Order Online</Link>
        <Link to="/Reservationn">Login</Link>
    </nav>
    );
};