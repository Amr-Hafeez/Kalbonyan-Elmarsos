const TestimonialSwitcher = (props) => {

    const onClickHandler = () => {
        // eslint-disable-next-line react/prop-types
        if (props.currId === props.id) {
            return;
        }

        // eslint-disable-next-line react/prop-types
        props.onClick(props.id);
    }

    return (
        // eslint-disable-next-line react/prop-types
        <span className={`cursor-pointer w-3 h-3 rounded-full ${props.id === props.currId ? 'bg-star' : 'bg-white'}`} id={props.id} onClick={onClickHandler}></span>
    )
};

export default TestimonialSwitcher;