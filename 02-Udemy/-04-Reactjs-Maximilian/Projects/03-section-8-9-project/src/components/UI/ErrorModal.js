import classes from './ErrorModal.module.css';
import ReactDOM from 'react-dom';
import Card from "./Card";
import Button from "./Button";

const ErrorModal = props => {

    const Backdrop = props => {
        return <div className={classes.backdrop} onClick={props.onConfirm}/>;
    }

    const ModalOverlay = props => {
        return (
            <Card className={classes.modal}>
                <header className={classes.header}>
                    <h2>{props.error.title}</h2>
                </header>
                <div className={classes.content}>
                    <p>{props.error.message}</p>
                </div>
                <footer className={classes.actions}>
                    <Button onClick={props.onConfirm}>Okay</Button>
                </footer>
            </Card>
        );
    };

    return (
        <>
            {
                ReactDOM.createPortal(
                    <Backdrop onConfirm={props.onConfirm}/>,
                    document.getElementById('backdrop')
                )
            }
            {
                ReactDOM.createPortal(
                    <ModalOverlay
                        error={props.error}
                        onConfirm={props.onConfirm}
                    />,
                    document.getElementById('overlay-root')
                )
            }
        </>
    );
};

export default ErrorModal;