import './styles.css';


function FeaturesItem(props) {
  return (
    
    <div className="feature-item">
        <div className={`elipse ${props.color}`}>
            <img src={props.icon} className="img-fluid" alt={props.title} />
        </div>
        <div className="elipse-info">
            <h3 className={props.color}>{props.title}</h3>
            <p>{props.text}</p>
        </div>
    </div>
  );
}

export default FeaturesItem;


