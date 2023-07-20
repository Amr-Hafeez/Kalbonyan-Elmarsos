import './Card.css';

export const Card = (props) => {
    const classes = props.className;
    return <div className={`card ${classes}`} id={props.id}>{props.children}</div>
}