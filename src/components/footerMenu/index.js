import './styles.css';
import MenuItem from '../reusables/menuItem';

function FooterMenu() {
    return (
                <ul className="menu">
                  <MenuItem title={"Home"} link={"#home"} footer={"footer-item"} />
                  <MenuItem title={"Key Features"} link={"#features"} footer={"footer-item"} />
                  <MenuItem title={"Pricing"} link={"#pricing"} footer={"footer-item"} />
                  <MenuItem title={"Testimonial"} link={"#testimonial"} footer={"footer-item"} />
                  <MenuItem title={"FAQ"} link={"#faq"} footer={"footer-item"} />
                </ul>

    );
}

export default FooterMenu;
