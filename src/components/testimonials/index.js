import './styles.css';
import TestimonialsItem from '../reusables/testimonialsItem';
import TitleSection from '../reusables/titleSection';
import ClientsMap from '../../resources/pictures/clients/map.png';
import Zoltan from '../../resources/pictures/clients/client-1.png';
import John from '../../resources/pictures/clients/client-2.png';
import Jane from '../../resources/pictures/clients/client-3.png';


function Testimonials(props) {
    return (

        <section id="testimonial" className="section-space">
          <div className="container">
              <div className="row">
                  <div className="col-md-6 col-xs-12">
                      <div className="testimonial-bg">
                          <img src={ClientsMap} className="img-fluid testimonial-img" alt="testimonials" />
                      </div>
                  </div>
                  <div className="col-md-6 col-xs-12">
                  <TitleSection
                    title="Meet Client Satisfaction by using product"
                    text="The rise of mobile devices transforms the way we consume information entirely and the world's most elevant channels such as Facebook."
                    align="left"
                />           
                        <div className="row owl-carousel" id="testimonial-carousel">

                              <TestimonialsItem
                                rating="5"
                                title="User friendly and Customizable"
                                feedback="Bring to the table win-win survival strategies to ensure proactive that has evolved from generation X is on the runway heading towards domination. At the end of the day, going forward, a new normal a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.ncrease productivity with a simple to-do app. app for managing your personal budgets."
                                username="Zoltan Nemeth"
                                userrole="CEO of Pixler Lab"
                                userpic={Zoltan}
                            />

                            <TestimonialsItem
                                rating="4"
                                title="User friendly and Customizable"
                                feedback="Bring to the table win-win survival strategies to ensure proactive that has evolved from generation X is on the runway heading towards domination. At the end of the day, going forward, a new normal a streamlined cloud solution."
                                username="John Doe"
                                userrole="CEO of Acme"
                                userpic={John}

                            />

                            <TestimonialsItem
                                rating="5"
                                title="Cool features"
                                feedback="Bring to the table win-win survival strategies to ensure proactive that has evolved from generation X is on the runway heading towards domination. At the end of the day, going forward, a new normal a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.ncrease productivity with a simple to-do app. app for managing your personal budgets."
                                username="Jane Doe"
                                userrole="Editor in New Yorker Magazine"
                                userpic={Jane}
                            />
  
                        </div> 

                      
                      </div>
                  </div>
  
              </div>
      </section>

    );
}

export default Testimonials;

