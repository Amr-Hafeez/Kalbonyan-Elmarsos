import Slider from "react-slick";

import "./slick.css";
import "./slick-theme.css";
import Card from "../Card.jsx";


const  Responsive = () => {

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        vertical: false,
        responsive: [
            {
                breakpoint: 1350,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },

            {
                breakpoint: 1030,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div>
            <Slider {...settings}>
                <div>
                    <Card id={0}/>
                </div>
                <div>
                    <Card id={1}/>
                </div>
                <div>
                    <Card id={2}/>
                </div>
                <div>
                    <Card id={3}/>
                </div>
                <div>
                    <Card id={4}/>
                </div>
                <div>
                    <Card id={5}/>
                </div>
                {/*<div>*/}
                {/*    <h3>7</h3>*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    <h3>8</h3>*/}
                {/*</div>*/}
            </Slider>
        </div>
    );
}

    export default Responsive;