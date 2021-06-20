import './styles.css';

function AccordionItem(props) {
    return (
                <div class="accordion-item">
                    <div class="accordion-header collapsed" data-toggle="collapse" data-target={`#collapse${props.id}`} aria-expanded="false" aria-controls={`#collapse${props.id}`}>
                      <div class="accordion-title">{props.question}</div>
                      <div class="accordion-icon"></div>
                    </div>
                    <div class="accordion-body collapse" id={`collapse${props.id}`} data-parent="#faqAccordion">
                      <div class="accordion-inner">{props.answer}</div>
                    </div>
                  </div>
    );
}

export default AccordionItem;
