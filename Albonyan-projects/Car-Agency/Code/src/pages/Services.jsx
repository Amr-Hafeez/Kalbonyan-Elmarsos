
import SectionHeader from "../components/SectionHeader.jsx";
import Service from "../components/Service.jsx";

const Services = () => {
    return (
        <section className={`
                p-[100px_15px_70px] min-h-screen bg-[#dfdfdf]
                bg-no-repeat bg-cover bg-center bg-[url('/images/services-3.png')]
            `} id={'services-section'}
        >
            <SectionHeader  align={'center'} color={'text-main'} title={'SERVICES'} subTitle={'Services'}/>
            <div className={`
                    container mx-auto md:p-[15px] mt-44
                    grid grid-cols-3 gap-32 text-center
                    
                    max-[1024px]:gap-12
                     
                    max-[768px]:grid-cols-[50%] max-[768px]:justify-center
                    max-[768px]:mt-12 max-[768px]:gap-16
                    
                    max-[640px]:grid-cols-[70%]
                `}
            >
                <Service
                    imgName={'car-sales'}
                    title={'Car sales'}
                    desc={`At YourCar, we offer a wide selection of luxury vehicles for sale.
                        Whether you're in the market for a sleek sports car or a spacious SUV, we have the perfect vehicle to fit your needs.
                    `}
                />
                <Service
                    imgName={'car-rental'}
                    title={'Car rental'}
                    desc={`If you're in need of a luxury car rental, look no further than YourCar. 
                        Our fleet of high-end vehicles is regularly maintained and serviced to ensure that you have a safe and comfortable driving experience.
                    `}
                />
                <Service
                    imgName={'car-selling'}
                    title={'Car selling'}
                    desc={`At YourCar, we make it easy to sell your car. Simply bring your vehicle in for an appraisal, and we'll handle the rest.
                        We offer fair prices and a hassle-free selling process, so you can get  your vehicle with minimal effort.
                    `}
                />
            </div>
        </section>
    )
};

export default Services;