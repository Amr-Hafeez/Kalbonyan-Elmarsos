import {useState} from "react";
import {useAppContext} from "../context/appContext.jsx";

const FormRow = ({name, type, labelText, changeHandler, value, placeholder}) => {
    const {lang} = useAppContext();
    const [showPassword, setShowPassword] = useState(false);
    const typeIsPassword = type === 'password';
    if (type !== 'email' && showPassword) {
        type = 'text';
    }
    const isRequired = type === 'email' || type === 'password' || name === 'username'
    return (
        <div
            className={` flex flex-col mb-4
            max-[640px]:mb-3.5
            `}
        >
            <label className={`text-labelColor font-medium mb-2 max-[640px]:mb-1.5`}
                   htmlFor={name}
            >{labelText}</label>
            <div className={'relative dark:bg-input rounded-md'}>
                <input
                    onChange={changeHandler}
                    id={name}
                    type={type}
                    name={name}
                    value={value}
                    placeholder={placeholder || ''}
                    className={`shadow-shadow-input px-3 rounded-md
                        py-3.5 w-full h-full dark:bg-input
                        outline-offset-0 outline-0
                        focus:shadow-onFocus
                        placeholder:absolute placeholder:top-[18px]
                        placeholder:dark:text-white placeholder:text-2xl
                        placeholder:text-input placeholder:tracking-wide
                        dark:text-white dark:focus:shadow-dark
                        ${typeIsPassword && lang === 'ar' && 'pl-10'}
                        ${typeIsPassword && lang === 'en' && 'pr-10'}
                    `}
                    required={isRequired}
                />
                {
                    typeIsPassword && !showPassword &&
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                         className={` w-6 h-6 absolute top-1/2
                            translate-y-[-50%] cursor-pointer
                            ${lang === 'ar' ? 'left-2' : 'right-2'}
                            dark:text-white
                         `}
                         onClick={() => setShowPassword(!showPassword)}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                    </svg>
                }
                
                {
                    typeIsPassword && showPassword &&
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                         className={` w-6 h-6 absolute top-1/2
                            translate-y-[-50%] cursor-pointer
                            ${lang === 'ar' ? 'left-2' : 'right-2'}
                         `}
                         onClick={() => setShowPassword(!showPassword)}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    
                }
            </div>
        </div>
    );
};

export default FormRow;
