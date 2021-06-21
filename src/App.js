import React from 'react';
import './index.css';
import Header from './components/header';
import HomeSection from './components/homeSection';
import Partners from './components/partners';
import FeaturesSection from './components/featuresSection';
import JackpotsSection from './components/jackpotsSection';
import IntegrationSection from './components/integrationSection';
import ProsSection from './components/prosSection';
import UltimateSection from './components/ultimateSection';
import PricesSection from './components/pricesSection';
import Testimonials from './components/testimonials';
import FAQ from './components/faq';
import DownloadSection from './components/downloadSection';
import Footer from './components/footer';


class App extends React.Component {
  render (){
    return (
    <div className="app">
        <Header />
        <HomeSection />
        <Partners />
        <FeaturesSection />
        <JackpotsSection />
        <IntegrationSection />
        <ProsSection />
        <UltimateSection />
        <PricesSection />
        <Testimonials />
        <FAQ />
        <DownloadSection />
        <Footer />
    </div> 
    );
  }
}

export default App;