import { Link } from "react-router-dom"
export default function Content3() {
    return (
        <div id="content3">
            <div className="card">
              <img src="./images/lemonbar.jpg" className="card-img-top" alt="Lemon Bar"></img>
              <div className="card-body">
                <h3 className="card-title">Lemon Bar <span>$12.99</span></h3>
                <p className="card-text">This is straight from grandmas recipe book, Yummy lemon bars</p>
                <button>
                    <Link href="#" className="btn btn-primary"></Link>
                    <Link href="#delivery">Order for Delivery</Link>
                </button>
              </div>
          </div>
        </div>
    );
};