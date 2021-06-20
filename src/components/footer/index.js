
import './styles.css';
import FooterMenu from "../footerMenu";
import SocialIcons from '../socialIcons';

function Footer() {
  return (
    <footer class="footer section section-space-sm">
        <div class="container">
          <div class="row">
            <div class="col-md-6 mx-auto d-flex flex-column align-items-center">
                <a class="footer-logo logo" href="#">App<span>Lab</span></a>
              <ul class="menu">
              <FooterMenu/>
              </ul>
              <SocialIcons/>
              <div class="copyright">Copyright© Arifur Rahman Tushar 2019. All rights reserved</div>
            </div>
          </div>
        </div>
      </footer>
    
  );
}

export default Footer;