const SectionHeader = (props) => {
    return (
        // eslint-disable-next-line react/prop-types
        <div className={`font-['Lora'] ${ props.align === 'left' ? 'text-left': 'text-center'}
                max-[640px]:text-center
            `}
             /* eslint-disable-next-line react/prop-types */
             id={props.id}
        >
            {/* eslint-disable-next-line react/prop-types */}
            <h1 className={`${props.titleColor ? props.titleColor : 'text-head-color'} ${props.isTesti ? 'max-[450px]:text-[40px]' : 'max-[450px]:text-[50px]'}
                    font-bold
                    xlg:text-[6rem]
                    lg:text-[5rem]
                    md:text-[6rem]
                    text-center
                    max-[768px]:text-6xl
                    
                    
                `}
            >
                {/* eslint-disable-next-line react/prop-types */}
                {props.title}
            </h1>
            {/* eslint-disable-next-line react/prop-types */}
            <p className={` ${props.color} ${ props.align === 'left' ? 'text-left left-[60px]' : ''}
                    text-purple-900 font-bold text-[30px] md:text-4xl relative 
                     md:top-[-60px]
                    lg:top-[-50px]
                    top-[-25px]
                    max-[1024px]:text-center
                    max-[1024px]:left-0
                `}
               /* eslint-disable-next-line react/prop-types */
            >{props.subTitle}</p>
        </div>
    )
};

export default SectionHeader;