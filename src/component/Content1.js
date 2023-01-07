import { Link } from 'react-router-dom';
export default function Content1() {
    return (
        <div id="content1">
            <div className="card">
                <img src="./images/greek.jpg" className="card-img-top" alt="Greek Salad"></img>
                    <div className="card-body">
                        <h3 className="card-title">Greek Salad <span>$12.99</span></h3>
                        <p className="card-text">The famous Greek salad of crispy lettuce, pepper, olives and our Chicago style feta</p>
                        <button>
                            <Link to="/" className="btn btn-primary"></Link>
                            <Link to="/delivery">Order for Delivery</Link>
                        </button>
                    </div>
            </div>
        </div>
    );
};