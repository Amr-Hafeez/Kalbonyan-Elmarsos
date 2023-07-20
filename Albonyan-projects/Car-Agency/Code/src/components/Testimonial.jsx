import { useState} from "react";
import TestimonialSwitcher from "./TestimonialSwitcher.jsx";
import data from '../../data.json';

const Testimonial = () => {
    const [testimonialId, setTestimonial] = useState(1)

    const switchTestimonialHandler = (id) => {
        setTestimonial(id);
    };

    return (
        <>
            { data && data.length > 0 &&
            <div className={` container max-h-[400px] relative
                    w-1/3 bg-white p-[50px_50px] rounded-2xl mx-auto mt-32 text-center
                    
                    max-[640px]:w-[90%]
                    max-[1400px]:w-1/2
                    max-[768px]:w-3/5
                    
                    max-[1024px]:p-12
                    
                `}
            >
                <p>
                    {data[1].testimonials[testimonialId].description}
                </p>
                <div className="stars mb-5 flex mt-5 justify-center gap-2">

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                         stroke="currentColor" className="w-7 h-7 fill-star stroke-star">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                         stroke="currentColor" className="w-7 h-7 fill-star stroke-star">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                         stroke="currentColor" className="w-7 h-7 fill-star stroke-star">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                         stroke="currentColor" className="w-7 h-7 fill-star stroke-star">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                         stroke="currentColor" className="w-7 h-7 fill-star stroke-star">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"/>
                    </svg>
                </div>
                <div className={'flex gap-4 justify-center items-end'}>
                    <div className="name text-main-color font-bold text-xl">
                        {data[1].testimonials[testimonialId].name}
                    </div>
                    <div className="city text-[#979797]">Las vegas</div>
                </div>
                <div className={` w-[200px]
                        absolute right-[-10%] top-[70%]
                        max-[768px]:top-[80%]
                    `}
                >
                    <img src="/images/image-4.png" alt=""/>
                </div>
            </div>
            }
            <div className={'flex justify-center gap-2 mt-9 max-[640px]:hidden'}>
                <TestimonialSwitcher
                    id={0}
                    currId={testimonialId}
                    onClick={switchTestimonialHandler}
                />

                <TestimonialSwitcher
                    id={1}
                    currId={testimonialId}
                    onClick={switchTestimonialHandler}
                />

                <TestimonialSwitcher
                    id={2}
                    currId={testimonialId}
                    onClick={switchTestimonialHandler}
                />

                <TestimonialSwitcher
                    id={3}
                    currId={testimonialId}
                    onClick={switchTestimonialHandler}
                />
            </div>
        </>
    );
};

export default Testimonial;
