import Navbar from "./component/Navbar";
import Main from "./component/Main";
import Sidebar from "./component/Sidebar";
import Content1 from "./component/Content1";
import Content2 from "./component/Content2";
import Content3 from "./component/Content3";
import Footer from "./component/Footer";
import "./App.css";


function App() {
  return (
    <div className="container">
    <Navbar />,
    <Sidebar />,
    <Main />,
    <Content1 />,
    <Content2 />,
    <Content3 />,
    <Footer />
    </div>
  )
}

export default App