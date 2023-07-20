
const Hero = () => {
    return (
        <>
            <section id={'home-section'} className={"font-['Lora'] flex justify-end max-[640px]:justify-center items-center pb-[96px] min-h-screen section-hero bg-no-repeat bg-cover bg-center bg-[url('/images/Background.png')]"} >
                <div className={` mr-16 max-w-xl text-white text-right 
                        max-[768px]:max-w-lg
                        
                        max-[640px]:text-center
                        max-[640px]:mr-0 max-[640px]:p-5 
                    `}
                >
                    <h1 className={'max-[640px]:leading-tight text-[35px] lg:text-6xl font-medium md:text-5xl'}>Find the perfect car for you at YourCar.</h1>
                    <p className={`mt-7 font-medium text-[20px] md:text-xl w-2/3 ml-auto
                            max-[640px]:ml-0 max-[640px]:w-full
                            max-[640px]:bg-black/50 max-[640px]:p-3.5
                            max-[640px]:leading-tight
                        `}
                    >
                        We offer a wide range of cars that cater to your needs and
                        budget. Visit us today and drive away with your dream car!
                    </p>
                    <button className={` text-lg font-medium ml-auto mt-6 border border-white rounded p-[5px_25px]
                            flex items-center justify-end  gap-3 cursor-pointer
                            max-[640px]:mx-auto 
                        `}
                    >
                        Discover
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>

                    </button>
                </div>
            </section>
        </>
    )
};

export default Hero;
// max-[640px]:relative max-[640px]:right-[50%]
// max-[640px]:translate-x-[50%]