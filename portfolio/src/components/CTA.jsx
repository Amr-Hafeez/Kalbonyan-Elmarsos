import cv from '/src/assets/cv.pdf';

const CTA = () => {
    return (
        <div className={'cta'}>
            <a className={'btn'} href={cv} download>Download CV</a>
            <a href="#contact" className={'btn btn-primary'}>{`Let's Talk`}</a>
        </div>
    );
};

export default CTA;
