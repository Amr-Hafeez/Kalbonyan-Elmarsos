import {useEffect, useRef} from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';
import {MdOutlineEmail} from "react-icons/md";
import {RiMessengerLine} from "react-icons/ri";
import {BsWhatsapp} from "react-icons/bs";
import {useInView} from "react-intersection-observer";

// eslint-disable-next-line react/prop-types
const ContactSection = ({handler}) => {
    
    const form = useRef();
    
    const {ref , inView, entry} = useInView({
        threshold: 0,
        rootMargin: '-400px'
    })
    
    useEffect(() => {
        if (inView) {
            handler(entry.target.id);
        }
    }, [inView]);
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_aerortf', 'template_60wmc6o', form.current, '1fFEar6q57rW1fHGU')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();
    };
    return (
        <section id={'contact'} ref={ref}>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className={'contact__option-icon'}/>
                        <h4>Email</h4>
                        <h5>amrkhalid1206@gmail.com</h5>
                        <a href="mailto:amrkhalid1206@gmail.com"
                           target={'_blank'} rel="noreferrer"
                        >Mail Me</a>
                    </article>

                    <article className="contact__option">
                        <RiMessengerLine className={'contact__option-icon'}/>
                        <h4>Messenger</h4>
                        <h5>AmrKhalidOmar</h5>
                        <a href="https://m.me/AmrKhalidOmar"
                           target={'_blank'} rel="noreferrer"
                        >Text Me</a>
                    </article>

                    <article className="contact__option">
                        <BsWhatsapp className={'contact__option-icon'}/>
                        <h4>Whatsapp</h4>
                        <h5>+20**********</h5>
                        <a href="https://wa.me/+201127684145"
                           target={'_blank'} rel="noreferrer"
                        >Text Me</a>
                    </article>
                </div>
                {/* END OF CONTACT OPTIONS */}
                <form ref={form} onSubmit={sendEmail}>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder={'Your Name'}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder={'Your Email'}
                        required={true}
                    />
                    <input
                        type="text"
                        name="subject"
                        id="subject"
                        placeholder={'Subject'}
                        required
                    />
                    <textarea
                        name="message"
                        rows="7"
                        placeholder={'Your Message'}
                        required={true}
                    ></textarea>

                    <button type="submit" className="btn btn-primary"
                    >Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default ContactSection;
