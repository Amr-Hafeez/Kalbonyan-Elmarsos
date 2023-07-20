const Service = (props) => {
    return (
        <div className={'text-main'}>
            <div className=" h-[140px]">
                {/* eslint-disable-next-line react/prop-types */}
                <img className={'max-w-1/3 mx-auto'} src={`/images/services/${props.imgName}.png`} alt="A star"/>
            </div>
            <div>
                {/* eslint-disable-next-line react/prop-types */}
                <h4 className={'font-bold text-xl  mb-4'}>{props.title}</h4>
                {/* eslint-disable-next-line react/prop-types */}
                <p>{props.desc}</p>
            </div>
        </div>
    )
};

export default Service;