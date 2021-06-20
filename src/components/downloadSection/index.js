import './styles.css';
import TitleSection from '../reusables/titleSection';
import GooglePlay from '../../resources/pictures/icons/google-play.png';
import AppStore from '../../resources/pictures/icons/ios.png';
import Download from '../../resources/pictures/main/download.png';


function DownloadSection() {
  return (

    <section className="download-main">
          <div className="container">
            <div className="row col-sm-6">
                <TitleSection
                  title="Download our App now!"
                  text="The rise of mobile devices transforms the way we consume information entirely and the world's most elevant channels such as Facebook."
                  align="left"
                />
                <div className="section-downloads">
                  <a className="link link-download" href="https://play.google.com/store" target="_blank"><img src={GooglePlay} alt="Google play" /></a>
                  <a className="link link-download" href="https://www.apple.com/ua/app-store/" target="_blank"><img src={AppStore} alt="App store" /></a>
                </div>
              </div>
              <div className="col"><img className="download-img img-fluid" src={Download} alt="Guy with segways" /></div>
            </div>
        </section>

    );
}

export default DownloadSection;