import logo from '../assets/img/dominos.svg'
import '../assets/style/header.css'

function Header() {
  return (
    <header>
        <img src={logo}></img>
        <h1>Dominos pizza</h1>
    </header>
  );
}
export default Header;
