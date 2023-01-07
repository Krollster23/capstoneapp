import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; Jonah Kroll, 2023</p>
            <Link to="#Home">Home</Link>
            <Link to="#About">About</Link>
            <Link to="#Menu">Menu</Link>
            <Link to="#Reservation">Reservation</Link>
            <Link to="#Order-online">Order Online</Link>
            <Link to="#Login">Login</Link>
        </footer>
    );
};

export default Footer