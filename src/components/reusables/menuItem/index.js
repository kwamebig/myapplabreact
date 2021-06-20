import "./styles.css";

function MenuItem(props) {
    return (
        
        <li className="menu-item">
            <a className={`menuItem ${props.footer == "footer-item" ? "footer-item" : ""}`} href={props.link}>{props.title}</a>
        </li>

    );
}

export default MenuItem;