import { Link } from 'react-router-dom'
export default function Content2() {
    return (
        <div id="content2">
            <div className="card">
              <img src="./images/brucetta.jpg" className="card-img-top" alt="Bruchetta"></img>
              <div className="card-body">
                <h3 className="card-title">Bruchetta <span>$12.99</span> </h3>
                <p className="card-text">Our Bruchetta is made from grilled that has been smeared with garlic and seasoned with salt and olive oil.</p>
                <button>
                    <Link to="/" className="btn btn-primary"></Link>
                    <Link to="/delivery">Order for Delivery</Link>
                </button>
              </div>
          </div>
        </div>
    );
};