import { Link } from "react-router-dom"
export default function Main() {
    return (
        <div className="main">
            <img src="./images/hero.jpg" className="hero-image" alt="Hero"></img>
            <h1>Little Lemon</h1>
            <p>Minneapolis</p>
            <p>We are a family owned Meditteran restuant.</p> <br></br>
            <button>
                <Link href="#Book-a-table">Book A Table</Link>
            </button>
        </div>
    );
};