import React from 'react';

import southWestImage from '../../resources/pictures/companies/company-1.png';
import anubisImage from '../../resources/pictures/companies/company-2.png';
import alonzoImage from '../../resources/pictures/companies/company-3.png';
import premiumExpressImage from '../../resources/pictures/companies/company-4.png';
import maniacImage from '../../resources/pictures/companies/company-5.png';

function Partners() {
  return (

    <section id="companies" className="section-space">
          <div className="container">
              <h2 className="text-center trust">Trusted by companies like</h2>
              <div className="row justify-content-center align-items-center">
                  <div className="col-lg-2 col-md-4 col-sm-6 companies-item"><img src={southWestImage} alt="SouthWeast Company" /></div>
                  <div className="col-lg-2 col-md-4 col-sm-6 companies-item"><img src={anubisImage} alt="Anubis Entertainment" /></div>
                  <div className="col-lg-2 col-md-4 col-sm-6 companies-item"><img src={alonzoImage} alt="Alonzo Casseta" /></div>
                  <div className="col-lg-2 col-md-4 col-sm-6 companies-item"><img src={premiumExpressImage} alt="Premium Express" /></div>
                  <div className="col-lg-2 col-md-4 col-sm-6 companies-item"><img src={maniacImage} alt="Maniac" /></div>
              </div>
          </div>
      </section>
  );

}

export default Partners;