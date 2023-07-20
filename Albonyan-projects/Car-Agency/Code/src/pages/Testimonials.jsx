import SectionHeader from "../components/SectionHeader.jsx";
import Testimonial from "../components/Testimonial.jsx";

const Testimonials = () => {
    return (
        <section className={` 
                w-ful min-h-screen  bg-main p-[100px_15px_70px]
                
            `} id={'testimonials-section'}
        >
            <SectionHeader isTesti={true} titleColor={'text-black/30'} id={'testimonials'} title={'TESTIMONIALS'} color={'text-head-color'} subTitle={'Testimonials'}/>
            <Testimonial/>
        </section>
    )
};

export default Testimonials;