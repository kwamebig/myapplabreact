import React, { useState } from 'react'; 
import './styles.css';
import Button from '../reusables/button';
import TitleSection from '../reusables/titleSection';
// import PriceBlock from "../reusables/pricesBlock";

function PricesSection() {


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
                            <input type="radio" name="duration-1" value="monthly" id="monthly-1" checked />
                            <label for="monthly-1">Monthly</label>
                            <input type="radio" name="duration-1" value="annually" id="annually-1" />
                            <label for="annually-1">Annually</label>
                            <span className="switch"></span></p>
                    </div>
                    
                    <div className=" table row justify-content-center">

                    
                        <div className="col-lg-4 col-md-6">
                            {/* <PriceBlock
                                price="$0"
                                name="Business class"
                                desc="For Small teams or office"
                                id="1"
                                term="month"
                                type="monthly"
                                visibility="visible"
                            /> */}
                            <div className="table-item is-visible" data-type="monthly">
                                <div className="table-head">
                                    <h2 className="price-1">$0<span className="per">/month</span></h2>
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
                        {/* <PriceBlock
                                price="$98"
                                name="Pro Master"
                                desc="For Best Oportunities"
                                id="2"
                                term="year"
                                type="annually"
                                visibility="hidden"
                            /> */}
                            <div className="table-item is-hidden" data-type="annually">
                                <div className="table-head">
                                    <h2 className="price-2">$99<span className="per">/month</span></h2>
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

export default PricesSection;



{/* <PriceBlock 
                        price="$0"
                        name="Business class"
                        text="For Small teams or office"

                    />

                    <PriceBlock 
                        price="$95"
                        name="Premium class"
                        text="For Small teams or office"

                    /> 

            import React, { Component, useState} from "react";
            import './styles.css';
            import Button from '../reusables/button';
            import TitleSection from '../reusables/titleSection';
            import PriceBlock from "../reusables/pricesBlock";
            
            class Example extends Component {
            
              constructor() {
                super();
                this.state = {range: 1};
             }
            
              render() {
                return (
            
                    <div className="priceSection">
                            
                            <div className="term"> 
                           
                            <div className="form-check">
                                <input className="form-check-input" value="1" type="radio" 
                                        name="flexRadioDefault" id="flexRadioDefault1"/>
                                <label className="form-check-label" for="flexRadioDefault1" onClick={() => {this.setState(state: {range: 1})}}>
                                    Monthly
                                    </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" value="2" type="radio" name="flexRadioDefault" 
                               id="flexRadioDefault2"/>
                               <a href="#" onClick={() => {this.setState( state: {range: 2})}}>Jimmy</a>
                               <label className="form-check-label" for="flexRadioDefault2">
                               Annually
                               </label>
                            </div>
                        </div>
            
                        <div className="container">
                        <PriceBlock
                            price={this.state.range == 1 ? "$0" : "$49"}
                            name="Title 1"
                        />
                        <PriceBlock
                            price={this.state.range == 1 ? "$99" : "$899"}
                            name="Title 2"
                        /> 
                );
              }
            }
            
            export default Example;  */}