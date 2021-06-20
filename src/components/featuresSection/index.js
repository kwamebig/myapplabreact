import './styles.css';
import TitleSection from '../reusables/titleSection';
import FeaturesItem from '../reusables/featuresItem';
import FeaturesPhone from '../../resources/pictures/main/features-phone.png';
import Fast from '../../resources/pictures/icons/icon-1.png';
import Prototyping from '../../resources/pictures/icons/icon-2.png';
import Vector from '../../resources/pictures/icons/icon-3.png';


function FeaturesSection() {
  return (

<section id="features" className="section-space">
          <div className="container">
              <div className="row justify-content-center">
                  <div className="col-md-6 col-xs-12">
                          <img src={FeaturesPhone} className="img" alt="features" />
                  </div>

                  <div className="col-md-6 col-xs-12">
                    <TitleSection
                        title="Awesome apps features"
                        text="Increase productivity with a simple to-do app. app for managing your personal budgets."
                        align="left"
                    />

                      <div className="feature-list">
                    <FeaturesItem
                        icon={Fast}
                        title="Fast Performance"
                        text="Get your blood tests delivered at home collect a sample from the news your blood tests."
                        color="red"        
                    />

                    <FeaturesItem
                        icon={Prototyping}
                        title="Prototyping"
                        text="Get your blood tests delivered at home collect a sample from the news your blood tests."
                        color="blue"        
                    />

                    <FeaturesItem
                        icon={Vector}
                        title="Vector Editing"
                        text="Get your blood tests delivered at home collect a sample from the news your blood tests."
                        color="green"        
                    />
                           
                      </div>
                  </div>
              </div>
          </div>
      </section>

    );
}

export default FeaturesSection;