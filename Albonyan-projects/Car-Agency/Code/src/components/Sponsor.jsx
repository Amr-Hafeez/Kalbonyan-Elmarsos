const Sponsor = (props) => {
    return (
        <div className={'justify-self-center'}>
            {/* eslint-disable-next-line react/prop-types */}
            <img className={' h-full'} src={`/images/sponsors/${props.id}.png`} alt="sponsor img"/>
        </div>
    );
};


export default Sponsor;