// import logo from '../../resources/pictures/icons/logo.png';
import './styles.css';
import HeaderMenu from "../headerMenu";


function Header() {
  return (

    <header class="header">
        <div class="container"><a class="logo" href="#">App<span>Lab</span></a>
          <div class="header-inner">
            <HeaderMenu/>
          </div>
        </div>
      </header>
    
  );
}

export default Header;
