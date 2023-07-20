import Sponsor from "../components/Sponsor.jsx";

const Sponsors = () => {
    return (
        <div className={`xlg:p-28 
                grid grid-cols-8 grid-rows-[60px] bg-sponsors
                
                lg:p-16
                max-[1024px]:p-12 max-[1024px]:grid-rows-[50px]
                
                max-[640px]:grid-cols-4 max-[640px]:gap-7 max-[640px]:grid-rows-[50px_50px]
                max-[640px]:p-10
            `}
        >
            <Sponsor id={1}/>
            <Sponsor id={2}/>
            <Sponsor id={3}/>
            <Sponsor id={4}/>
            <Sponsor id={5}/>
            <Sponsor id={6}/>
            <Sponsor id={7}/>
            <Sponsor id={8}/>
        </div>
    );
};

export default Sponsors;