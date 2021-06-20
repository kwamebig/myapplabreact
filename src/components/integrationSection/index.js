import './styles.css';
import Button from '../reusables/button';
import TitleSection from '../reusables/titleSection';
import Integration from '/Users/user1/myapplab1/src/resources/pictures/main/integration.png';

function IntegrationSection() {
    return (

        <section id="integration" className="section-space-sm">
          <div className="container">
              <div className="row justify-content-center">
                  <div className="col-md-6 col-xs-12">
                      <div className="integration-img">
                          <img src={Integration} className="img-fluid" alt="integration" />
                      </div>
                  </div>
                  <div className="col-md-6 col-xs-12 designed">
                  
                <TitleSection
                    title="Designed & built by the lastest code integration"
                    text="The rise of mobile devices transforms the way we consume information entirely and the world's most elevant channels such as Facebook."
                    align="left"
                />
                      <Button title={"Learn more"} link={"#"} />
                  </div>
              </div>
          </div>
      </section>

    );
}

export default IntegrationSection;