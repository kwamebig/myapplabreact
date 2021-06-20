import './styles.css';

function PricesBlock(props) {
    return (
                <div className={`table-item is-${props.visibility}`} data-type={props.type}>
                    <div className="table-head">
                        <h2 className={`price-${props.id}`}>{props.price}<span className="per">/{props.term}</span></h2>
                        <h4>{props.name}</h4>
                        <p className="intro">{props.desc}</p>
                    </div>
                </div>

    );
}

export default PricesBlock;

{/* <div className="priceBlock">
        //     <div className="head">
        //     <h3>{props.price}</h3>
        //     <h4>{props.text}</h4>
        //     <p>Drag #</p>
        //     </div>
        //     <div className="desc">
        //         <ul>
        //             <li>Item 1</li>
        //             <li>Item 2</li>
        //             <li>Item 3</li>
        //             <li>Item 4</li>
        //         </ul>
        //     </div>
        //     
        // </div>  */}
