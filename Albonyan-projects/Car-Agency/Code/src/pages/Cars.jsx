import SectionHeader from "../components/SectionHeader.jsx";
import Car from "../components/Car.jsx";
import Responsive from "../components/slider/Slider.jsx";

const Cars = () => {

    const scrollHandler = (e) => {
        const el = document.getElementById('gallery');
        const targetId = e.target.closest('button').id;
        el.scrollBy({
            top: 0,
            left: -(targetId === 'left' ? ((el.clientWidth ) / 3) : -((el.clientWidth ) / 3 )),
            behavior: 'smooth'
        })
        // console.log(el);
    }
    return (
        <>
            <section id={'cars-section'} className={'min-h-screen container max-[460px]:p-[100px_0_70px] p-[100px_50px_70px] mx-auto '}>
                <SectionHeader id={'cars'} title={'Cars'} color={'text-second'} subTitle={'Cars'}/>
                <div className="  m-auto ">
                    <div className=" container  " id={'gallery'}>
                        <Responsive/>
                    </div>
                </div>

            </section>
            <section className={''}>
                <div className={`grid grid-cols-[3fr_4fr_3fr] w-full lg:h-[750px]
                        
                        max-[640px]:grid-cols-1  max-[640px]:grid-rows-8 
                    `}
                >
                    <Car number={0}/>
                    <Car number={1}/>
                    <Car number={2}/>
                    <Car number={3}/>
                    <Car number={4}/>
                    <Car number={5}/>
                    <Car number={6}/>
                    <Car number={7}/>
                    <Car number={8}/>
                </div>
            </section>
        </>
    );
};

export default Cars;