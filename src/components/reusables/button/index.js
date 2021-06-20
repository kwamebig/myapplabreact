import "./styles.css";

function Button(props) {
    return (
        <a className={`button ${props.status === "link" ? "link" : ""}`} href={props.link}>{props.title}</a>
    );
}

export default Button;