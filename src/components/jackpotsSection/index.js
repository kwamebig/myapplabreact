import './styles.css';
import TitleSection from '../reusables/titleSection';
import FeaturesItem from '../reusables/featuresItem';
import Payouts from '../../resources/pictures/icons/icon-4.png';
import Network from '../../resources/pictures/icons/icon-5.png';
import Rewards from '../../resources/pictures/icons/icon-6.png';


function JackpotsSection() {
  return (

        <section id="jackpot" className="section-space">
          <div className="container">
              
              {/* <TitleSection
                    title="Smart jackpots that you may love this anytime anywhere"
                    text="The rise of mobile devices transforms the way we consume information entirely and the world's most elevant channels such as Facebook."
                    align="center"
                    jack="yes"
                /> */}
                <div className="row justify-content-center align-items-center">
                  <div className="col-md-6 horizontal section-heading">
                      <h2> Smart jackpots that you may love this anytime anywhere </h2>
                  </div>
                  <div className="col-md-6 d-flex justify-content-center">
                      <p className="intro">The rise of mobile devices transforms the way we consume information entirely and the world's most elevant channels such as Facebook.</p>
                  </div>
                </div>
              
              <div className="row justify-content-center py-5">
                  <div className="feature-list d-flex">

                    <FeaturesItem
                        icon={Payouts}
                        title="Automatic Payouts"
                        text="Get your blood tests delivered at home collect a sample from the news your blood tests."
                        color="red"        
                    />

                    <FeaturesItem
                        icon={Network}
                        title="Network Effect"
                        text="Get your blood tests delivered at home collect a sample from the news your blood tests."
                        color="blue"        
                    />

                    <FeaturesItem
                        icon={Rewards}
                        title="Bigger Rewards Method"
                        text="Get your blood tests delivered at home collect a sample from the news your blood tests."
                        color="green"        
                    />
                     
                  </div>
              </div>
             
          </div>
      </section>

    );
}

export default JackpotsSection;