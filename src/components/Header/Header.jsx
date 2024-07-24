import "./Header.css";
import rocket from "../../img/rocket.png"
function Header() {
  return (
<>
<header className="header">
  <div className="header-logo">
    <img src={rocket} alt="" />
    <h1>to<span>do</span>
    </h1>
  </div>
</header>
</>
  )
}

export default Header
