import SectionHeader from "../components/SectionHeader.jsx";

const About = () => {
    return (
        <section className={`
                container min-h-screen mx-auto p-[100px_50px_70px_50px]
                grid grid-cols-[3fr_2fr] gap-20 xl:gap-44 
                max-[1024px]:flex max-[1024px]:justify-center max-[1024px]:items-center
               
            `} id={'about-section' }
        >
            <div className={` `}>
                <SectionHeader id={'about'} title={'ABOUT US'} color={'text-second'} subTitle={'About'} align={'left'}/>
                <div className="text ">
                    <p className={'lg:m-[40px_0_20px_0] tracking-wide '}>
                        YourCar is a luxury car dealership that offers a personalized and first-class experience to its clients.
                        Our team of experienced professionals is dedicated to providing exceptional service and finding the perfect vehicle to match our clients{"'"} unique preferences and requirements. We have an extensive selection of high-end vehicles, ranging from sports cars to SUVs, all of which are maintained to the highest standards of quality and safety.
                    </p>
                    <p className={'tracking-wide'}>
                        At YourCar, we are committed to creating a stress-free and enjoyable car buying experience.
                        We understand that purchasing a luxury car can be a significant investment, which is why we offer flexible financing options to make the process more manageable. Our team is available to answer any questions and provide guidance throughout the entire buying process. We take pride in our outstanding customer service and attention to detail, and we are confident that our clients will be satisfied with their experience at YourCar.
                    </p>
                </div>
            </div>

            <div className={`
                    flex justify-end  relative
                    max-[1024px]:hidden
                `}
            >
                <img className={'max-h-[70%] '} src="/images/wall.png" alt="picture of a wall"/>
                <img className={` about-car 
                     max-h-[80%] max-[1024px]:max-h-[80%]
                     absolute top-1/2 left-1/2 
                    translate-y-[-60%] 
                    translate-x-[-25%]
                `} src="/images/about-car.png" alt="a car"/>
            </div>
        </section>
    )
};

export default About;