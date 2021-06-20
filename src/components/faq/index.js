import './styles.css';
import TitleSection from '../reusables/titleSection';
import AccordionItem from '../reusables/accordionItem';


function FAQ() {
  return (

    <section id="faq" class="section-space">
        <div class="container">

            <div class="faq-main">
            <TitleSection
                title="Frequently asked questions"
                text="The rise of mobile devices transforms the way we consume information entirely and the worlds most elevant channels such as Facebook."
                align="center"
            />
            </div>

            <div class="accordion" id="faqAccordion">
            <AccordionItem
                id="1"
                question="How to contact with riders emergency?"
                answer="Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment."
            />
            
            <AccordionItem
                id="2"
                question="App installation failed, how to update system information?"
                answer="22222 2222222222222 22222 22 22222222"
            />
            
            <AccordionItem
                id="3"
                question="Website reponse taking time, how to improve?"
                answer="Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment."
            />
            
            <AccordionItem
                id="4"
                question="New update fixed all bug and issues"
                answer="Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment."
            />
            
            <AccordionItem
                id="5"
                question="How to contact with riders emergency?"
                answer="Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment."
            />
              </div>
        </div>
    </section>
    
  );
}

export default FAQ;