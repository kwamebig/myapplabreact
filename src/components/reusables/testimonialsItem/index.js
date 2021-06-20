import './styles.css';
import Rating from 'react-rating';

function TestimonialsItem(props) {
    return (
        
        <div className="col-lg-12 owl-carousel">
                        <div className="customer-wrapper">
                            <div className="star-rating">
                                <Rating name="size-medium" defaultValue={props.rating} readOnly />
                            </div>
                            <h4>{props.title}</h4>
                            <p>{props.feedback}</p>
                                <div className="user">
                                    <div className="user-pic">
                                        <img src={props.userpic} className="img-fluid" />
                                    </div>
                                    <div className="user-name">
                                        <h5>{props.username}</h5>
                                        <p>{props.userrole}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
    );
}

export default TestimonialsItem;


{/* <i className="fas fa-star"></i>
    <i className="fas fa-star"></i>
    <i className="fas fa-star"></i>
    <i className="fas fa-star"></i>
    <i className="fas fa-star"></i> */}