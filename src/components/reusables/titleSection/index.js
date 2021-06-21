import './styles.css'

function TitleSection(props) {
    return ( <div className={`titleSection ${props.home === "home" ? "home" : ""}`}>
        <div className={`titleSection ${props.align === "center" ? "center" : "left"}`}>
            <div className={`${props.jack === "yes" ? "col-md-6 horizontal" : ""}`}><h2>{props.title}</h2></div>
            <div className={`${props.jack === "yes" ? "col-md-6" : ""}`}><p>{props.text}</p></div>
        </div>
    </div>
    );
}

export default TitleSection;

