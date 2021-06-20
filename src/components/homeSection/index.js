import './styles.css';
import Button from '../reusables/button';
import TitleSection from '../reusables/titleSection';
import Checkmark from '/Users/user1/myapplab1/src/resources/pictures/icons/correct.png';
import Home from '/Users/user1/myapplab1/src/resources/pictures/main/phone-1.png';

function HomeSection(props) {
    return (

        <section className="home" id="home">
        <div className="container container-offset"> 
          <div className="row">
            <div className="col-sm-7 home-content">
              <div className="home-choice">
                <div className="home-choice-icon">
                    <img src={Checkmark} className="img-fluid" alt="checkmark" />
                </div>
                <div className="home-choice-inner">#1 Editors Choice App of 2020</div>
              </div>
              <TitleSection
                title="Best app for your modern lifestyle"
                text="Increase productivity with a simple to-do app. app for managing your personal budgets."
                align="left"
              />
              <div className="home-buttons">
                <Button title={"Try for free"} link={"#"} />
                <Button title={"Watch demo video"} link={"https://vimeo.com/148751763"} status="link" />
                </div>
            </div>
            <div className="col home-phone-container"> <img className="home-phone" src={Home} alt="Home" /></div>
          </div>
        </div>
      </section>

    );
}

export default HomeSection;