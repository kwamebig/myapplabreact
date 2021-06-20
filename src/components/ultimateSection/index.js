import './styles.css';
import TitleSection from '../reusables/titleSection';
import BuiltItem from '../reusables/builtItem';
import Button from '../reusables/button';
import Planning from '/Users/user1/myapplab1/src/resources/pictures/main/phones.png';
import AppDevelopment from '../../resources/pictures/services/app-development.png';
import UX from '../../resources/pictures/services/ux.png';
import Cloud from '../../resources/pictures/services/cloud.png';
import Support from '../../resources/pictures/services/support.png';

function UltimateSection() {
    return (

        <section id="build" className="section-space-sm">
          <div className="container">
              <div className="row">
                <div className="col-md-7 col-lg-6">
                    <div className="build-main">
                <TitleSection
                    title="Ultimate features that we built"
                    text="The rise of mobile devices transforms the way we consume information entirely."
                    align="left"
                />
                    </div>
                <div className="row build-features">

                    <BuiltItem
                        icon={AppDevelopment}
                        title="App Development"
                        text="Get your blood tests delivered at home collect a sample from the news your blood tests."
                        color="red"
                        cols="2"        
                    />

                    <BuiltItem
                        icon={UX}
                        title="UX Planning"
                        text="Get your blood tests delivered at home collect a sample from the news your blood tests."
                        color="green"
                        cols="2"         
                    />

                    <BuiltItem
                        icon={Cloud}
                        title="Cloud Storage"
                        text="Get your blood tests delivered at home collect a sample from the news your blood tests."
                        color="orange"
                        cols="2"          
                    />

                    <BuiltItem
                        icon={Support}
                        title="Customer Support"
                        text="Get your blood tests delivered at home collect a sample from the news your blood tests."
                        color="blue"
                        cols="2"          
                    />
                        
                    <Button title={"See all"} link={"#"} />

                      </div>
                  </div>
                  <div className="col-md-5 col-lg-6">
                      <div className="ultimate-img">
                          <img src={Planning} className="img-fluid" alt="planning" />
                      </div>
                  </div>
              </div>
          </div>
      </section>

    );
}

export default UltimateSection;