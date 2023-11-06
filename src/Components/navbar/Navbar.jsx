import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar/>
        <div className="wrapper">
            <span>Kobi Dev</span>
            <div className="social">
                <a href="https://www.linkedin.com/in/wojciech-kobier/"><img src="/linkedin.png" alt="" /></a>
                <a href="https://github.com/Kobi-os"><img src="/github-sign.png" alt="" /></a>
                <a href="https://www.instagram.com/"><img src="/instagram.png" alt="" /></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar
