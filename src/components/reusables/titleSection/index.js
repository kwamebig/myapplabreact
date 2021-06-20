import './styles.css'

function TitleSection(props) {
    return ( <div className={`titleSection ${props.home === "home" ? "home" : ""}`}>
        <div className={`titleSection ${props.align === "center" ? "center" : "left"}`}>
            <h2>{props.title}</h2>
            <p>{props.text}</p>
        </div>
    </div>
    );
}

export default TitleSection;

