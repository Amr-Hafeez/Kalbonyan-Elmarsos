import {useDispatch, useSelector} from "react-redux";
import {cartActions} from "../store/cart-slice.js";
import {useState} from "react";
import NavLink from "./NavLink.jsx";


const Navigation = () => {
    const dispatch = useDispatch();
    const cartQuantity = useSelector(state => state.cart.totalQuantity);
    const cartIsOpened = useSelector(state => state.cart.isOpened);
    const [isNavActive, setNavActive] = useState(false);
    const [whoIsActive, setWhoIsActive] = useState('home');

    const navStateHandler = () => {
        if (cartIsOpened) {
            dispatch(cartActions.close());
        }
        setNavActive((prevState) => !prevState);
    }

    const toggleCartState = () => {
        dispatch(cartActions.toggle());
        if (isNavActive) {
            setNavActive(false);
        }
    }

    const activeLinkHandler = (e) => {
        setWhoIsActive(e.target.id);
        setNavActive((prevState) => !prevState);
    };

    return (
        <header className={`text-white p-[20px_25px] md:p-[20px_45px]
                ${cartIsOpened || isNavActive ? 'fixed' : 'absolute'}
                flex justify-between items-center mx-auto header
                bg-transparent  w-full h-[96px] top-0 left-0
                max-[768px]:bg-white max-[768px]:text-main max-[768px]:h-[80px]
            `}
        >
            <div className={` max-[767px]:text-[1.7rem] text-4xl font-bold font-['Lora']`}>Your<span className={'font-[400]'}>Car</span></div>
            <nav className={`flex`}>
                <ul className={` font-['Noto_sans'] font-bold
                        flex gap-3 item-center
                        max-[768px]:flex-col max-[768px]:fixed 
                        max-[768px]:top-[80px] max-[768px]:right-0 
                        max-[768px]:w-[300px] max-[768px]:h-screen max-[769px]:bg-[#101927E5]
                        ${isNavActive ? 'max-[768]nav-v' : ''} max-[768px]:text-white
                        max-[768px]:gap-0 max-[768px]:pt-28
                        max-[768px]:nav-v
                        max-[768px]:z-50
                        transition-transform
                        duration-300
                        ${isNavActive ? 
                            'max-[768px]:translate-x-[0]' : 
                            'max-[768px]:translate-x-[100%]'
                        }
                    `}
                    id={'nav-list'}
                >
                    <NavLink
                        onClick={activeLinkHandler}
                        isActive={whoIsActive}
                        id={'home'}>Home</NavLink>

                    <NavLink
                        onClick={activeLinkHandler}
                        isActive={whoIsActive}
                        id={'about'}>About</NavLink>

                    <NavLink
                        onClick={activeLinkHandler}
                        isActive={whoIsActive}
                        id={'services'}>Services</NavLink>

                    <NavLink onClick={activeLinkHandler}
                             isActive={whoIsActive}
                             id={'cars'}>Cars</NavLink>

                    <NavLink onClick={activeLinkHandler}
                             isActive={whoIsActive}
                             id={'contact'}>Contact</NavLink>
                </ul>
                <div className={`
                        ${cartIsOpened ? 'text-second' : ''}
                        relative
                        cursor-pointer
                        md:pl-2
                        md:m-[4px_0_0_10px]
                        max-[767px]:mr-[1.5rem]
                    `}
                     onClick={toggleCartState} id={'cart'}
                >
                    <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7 font-bold">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                    <span className={`absolute top-[-30%] right-[-30%] w-2 h-2 p-3 rounded font-medium flex justify-center items-center
                            ${cartIsOpened ? 'bg-second text-white' : 'bg-yellow text-main'}
                        `}
                    >{cartQuantity}</span>
                </div>

                <div className={` hidden cursor-pointer
                        max-[768px]:block
                    `}
                     onClick={navStateHandler}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                    </svg>
                </div>
            </nav>
        </header>
    )
};

export default Navigation;