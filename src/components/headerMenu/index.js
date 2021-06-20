import './styles.css';
import Button from '../reusables/button';
import MenuItem from '../reusables/menuItem';

function HeaderMenu() {
    return (

      <ul class="header-menu menu">
              <MenuItem title={"Home"} link={"#home"} />
              <MenuItem title={"Key Features"} link={"#features"} />
              <MenuItem title={"Pricing"} link={"#pricing"} />
              <MenuItem title={"Testimonial"} link={"#testimonial"} />
              <MenuItem title={"FAQ"} link={"#faq"} />
              <li class="menu-item header-buttons"><a><Button title={"Try for free"} link={"#"} /></a></li>
            </ul>

    );
}

export default HeaderMenu;
