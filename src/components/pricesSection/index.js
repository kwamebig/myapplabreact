import React, { useState } from 'react';
import './styles.css';
import Button from '../reusables/button';
import TitleSection from '../reusables/titleSection';

class PricesSection extends React.Component {
    

      render() {

        function radioOne(){ 
        document.getElementById("price-1").innerHTML = "$0<sub>/month</sub>";
        document.getElementById("price-2").innerHTML = "$99<sub>/month</sub>";
        }

        function radioTwo () {
        document.getElementById("price-1").innerHTML = "$45<sub>/year</sub>";
        document.getElementById("price-2").innerHTML = "$777<sub>/year</sub>";
        }

        return (

            <section id="pricing" className="section-space">
            <div className="container">
                <div className="pricing-main">
                <TitleSection
                    title="Get awesome features, without extra charge"
                    text="The rise of mobile devices transforms the way we consume information entirely and the world's most elevant channels such as Facebook."
                    align="center"
                />
                </div>
                 <div className="pricing-container justify-content-center">
                    <div className="pricing-switcher">
                        <p className="fieldset">
                            <input type="radio" name="duration-1" value="1" id="monthly-1" checked />
                            <label for="monthly-1" onClick={radioOne}>Monthly</label>
                            <input type="radio" name="duration-1" value="2" id="annually-1" />
                            <label for="annually-1" onClick={radioTwo}>Annually</label>
                            <span className="switch"></span></p>
                    </div>
                    
                    <div className=" table row justify-content-center">

                    
                        <div className="col-lg-4 col-md-6">
                            <div className="table-item is-visible" data-type="monthly">
                                <div className="table-head">
                                    <h2 id="price-1">$0<sub>/month</sub></h2>
                                    <h4> Business class</h4>
                                    <p className="intro">For Small teams or office</p>
                                </div>
                                <ul className="table-content">
                                    <li>Drag Drop Builder</li>
                                    <li>1,000's of Templates</li>
                                    <li>Blog Support Tools </li>
                                    <li>eCommerce Store </li>
                                </ul>
                                <Button title={"Start free trial"} link={"#"} />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="table-item is-hidden" data-type="annually">
                                <div className="table-head">
                                    <h2 id="price-2">$99<sub>/month</sub></h2>
                                    <h4> Pro Master </h4>
                                    <p className="intro">For Best Oportunities </p>
                                </div>
                                <ul className="table-content">
                                    <li>Drag Drop Builder</li>
                                    <li> 1,000's of Templates </li>
                                    <li>Blog Support Tools </li>
                                    <li>eCommerce Store </li>
                                </ul>
                                <div className="table-btn">
                                    <Button title={"Subscribe Now"} link={"#"} />
                                    <Button title={"Or start 14 Free Trial"} link={"#"} status="link" />
                                </div>
                            </div>
                            </div> 
                        </div>
                    </div>
                </div>
                    
        </section> 
        
        );
    }
}

export default PricesSection;