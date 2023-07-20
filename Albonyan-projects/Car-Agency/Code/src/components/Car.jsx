const Car = (props) => {
    return (
        <div className={'text-white w-full h-full relative car overflow-hidden'}>
            <div className={' transition-all text-center bg-black/80 absolute translate-x-full flex flex-col justify-center align-center top-0 left-0 w-full h-full '}>
                <h3 className={'text-2xl'}>Tesla Model 3</h3>
                <p>Disruptive, avant-garde, futuristic, innovative.</p>
                <button className={'text-base border border-white rounded-lg mt-4 mx-auto border-solid w-fit pt-2 pb-2 pr-4 pl-4'}>Contact</button>
            </div>
            {/* eslint-disable-next-line react/prop-types */}
            <img src={`/images/cars/car-${props.number + 1}.png`} className={'h-full w-full'} alt=""/>
        </div>
    )
};

export default Car;