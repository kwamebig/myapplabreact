import './styles.css';


function BuiltItem(props) {
  return (

                <div className={`${props.cols === "2" ? "col-sm-6" : "col-md-4"}`}>
                    <div className="choose-item">
                        <div className={`elipse ${props.color}`}>
                            <img src={props.icon} class="img-fluid" alt={props.title} />
                        </div>
                        <div className={`elipse-info ${props.align === "center" ? "center" : "left"}`}>
                            <h3 className="choose-head">{props.title}</h3>
                            <p>{props.text}</p>
                        </div>
                    </div>
                </div>
    
  );
}

export default BuiltItem;

