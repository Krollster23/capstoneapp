import { Link } from 'react-router-dom';
export default function Sidebar() {
    return (
        <div id="sidebar">
            <h2>This Weeks Specials!</h2>
            <button>
                <Link to="/Orderonline">Order Online</Link>
            </button>
        </div>
    );
};