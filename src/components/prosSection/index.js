import './styles.css';
import TitleSection from '../reusables/titleSection';
import BuiltItem from '../reusables/builtItem';
import AppDevelopment from '../../resources/pictures/services/app-development.png';
import Award from '../../resources/pictures/services/award.png';
import Cloud from '../../resources/pictures/services/cloud.png';
import Customization from '../../resources/pictures/services/customization.png';
import UX from '../../resources/pictures/services/ux.png';
import Support from '../../resources/pictures/services/support.png';


function ProsSection() { 
  return (
      
    <section id="choose" className="section-space">
          <div className="container">
              <div className="choose-main">
                <TitleSection
                    title="Why you should choose our app"
                    text="The rise of mobile devices transforms the way we consume information entirely and the world's most elevant channels such as Facebook."
                    align="center"
                />
                </div>

            <div class="row pt-5 justify-content-center">

                <BuiltItem
                    icon={AppDevelopment}
                    title="App Development"
                    text="Get your blood tests delivered at home collect a sample from the news your blood tests."
                    color="red" 
                    align="center"
                    cols="3"        
                />

                <BuiltItem
                    icon={Award}
                    title="Cloud Storage"
                    text="Get your blood tests delivered at home collect a sample from the news your blood tests." 
                    color="green"
                    align="center"
                    cols="3"      
                />

                <BuiltItem
                    icon={Cloud}
                    title="Customization"
                    text="Get your blood tests delivered at home collect a sample from the news your blood tests."
                    color="orange"
                    align="center"
                    cols="3"       
                />

                <BuiltItem
                    icon={Customization}
                    title="UX Planning"
                    text="Get your blood tests delivered at home collect a sample from the news your blood tests."
                    color="green"
                    align="center"
                    cols="3"       
                />
                  
                <BuiltItem
                    icon={UX}
                    title="Customer Support"
                    text="Get your blood tests delivered at home collect a sample from the news your blood tests."
                    color="blue"
                    align="center"
                    cols="3"       
                />

                <BuiltItem
                    icon={Support}
                    title="Customer Support"
                    text="Get your blood tests delivered at home collect a sample from the news your blood tests."
                    color="red"
                    align="center"
                    cols="3"       
                />

                </div>

          </div>
      </section>

    );
}

export default ProsSection;