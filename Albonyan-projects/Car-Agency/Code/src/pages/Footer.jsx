const Footer = () => {
    return (
        <footer className={` text-main p-[60px_15px] container  mx-auto
            `} id={'contact-section'}
        >
            <div className={`grid grid-cols-[3fr_4fr_3fr] lg:gap-40
                    max-[1024px]:gap-20  max-[1024px]:grid-cols-2
                    
                    max-[768px]:grid-cols-[300px] max-[768px]:justify-center
                    max-[768px]:gap-11
                `}
            >
                <div className={'max-[768px]:text-center '}>
                    <div className={`text-4xl text-second font-medium font-['Lora']`}>Your<span className={'font-[400]'}>Car</span></div>
                    <p className={' mt-7 mb-3.5 leading-tight'}>
                        We are known for luxurious and premium chauffeur services worldwide.
                        We are simply the best you can find.
                    </p>
                    <p className={' leading-tight'}>
                        We are dedicated to providing our customers with a first-class car buying,
                        selling and renting experience.
                    </p>
                </div>

                <div className={'max-[768px]:justify-self-center'}>
                    <h3 className={'text-second font-medium font-[\'Noto_sans\'] mb-3.5 text-center text-2xl'}>News Letter</h3>
                    <p className="text-center w-4/5 mx-auto">
                        Subscribe to our news letter for updates, news and exclusive offers
                    </p>

                    <form action="#" className={'flex gap-4 mt-9'}>
                        <input className={'border-second border basis-4/5 pl-2 caret-second text-main rounded'} type="email" name="email" placeholder={'Email'}/>
                        <input className={'grow-0 text-white bg-second p-[10px_20px] cursor-pointer rounded'} type="submit" value="Subscribe"/>
                    </form>
                </div>

                <div className={'max-[768px]:justify-self-center'}>
                    <h2 className={'text-second text-2xl font-medium font-[\'Noto_sans\'] mb-3.5 max-[640px]:text-center'}>Contact</h2>

                    <div className={'flex items-center gap-3 mb-3.5 '}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 fill-main" >
                            <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                        </svg>
                        <p className={'leading-tight'}>
                            2038 2nd Avenue,<br/>
                            Las Vegas, United States
                        </p>
                    </div>

                    <div className={'flex items-center gap-3 mb-3.5'}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 fill-main">
                            <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                        </svg>

                        <p className={'leading-tight'}>
                            01444773421423<br/>01477678449405
                        </p>
                    </div>

                    <div className={'flex items-center gap-3'}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 fill-main">
                            <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                            <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                        </svg>

                        <p>info@YourCar.com</p>
                    </div>
                </div>
            </div>

            <div className={'flex justify-center gap-4 mt-6'}>
                <svg xmlns="http://www.w3.org/2000/svg" className=" w-8 h-8 fill-main ionicon" viewBox="0 0 512 512">
                    <path
                        d="M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31z"
                        fillRule="evenodd"/>
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 fill-main ionicon" viewBox="0 0 512 512">
                    <path
                        d="M496 109.5a201.8 201.8 0 01-56.55 15.3 97.51 97.51 0 0043.33-53.6 197.74 197.74 0 01-62.56 23.5A99.14 99.14 0 00348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 002.54 22.1 280.7 280.7 0 01-203-101.3A95.69 95.69 0 0036 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0135.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 01-25.94 3.4 94.38 94.38 0 01-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0139.5 405.6a203 203 0 01-23.5-1.4A278.68 278.68 0 00166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 00496 109.5z"/>
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 fill-main ionicon" viewBox="0 0 512 512">
                    <path
                        d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z"/>
                    <path
                        d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z"/>
                </svg>
            </div>

            <div className={'bg-second w-full h-[1px] mt-7'}></div>

            <div className={'text-center mt-3'}>
                &copy; Copyright 2023 . <span className={'font-bold text-main'}>YourCar</span> All Rights Reserved
            </div>
        </footer>
    )
};

export default Footer;