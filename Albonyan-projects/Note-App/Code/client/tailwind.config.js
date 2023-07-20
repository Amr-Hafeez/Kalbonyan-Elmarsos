/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        colors: {
            'primary': '#D375B9',
            'labelColor': '#697386',
            'color': '#494C6B',
            'color-2': '#9495A5',
            'completed': '#D1D2DA',
            'border-color': '#E3E4F1',
            'btn-bg': '#7C8495',
            'color-dark': '#C8CBE7',
            'small-dark': '#5B5E7E',
            'bg': '#241229',
            'black-50': 'rgba(0,0,0,0.6)',
            'bg-2': '#25273D',
            'completed-dark': '#4D5067',
            'shadow': '#E8E8EB',
            'grey-500': '#627d98',
            'white': '#fff',
            'input': '#404363',
            'border': '#e7e7e7',
            'border-dark': '#393a4b',
            'transparent': 'transparent',
            'red-700': 'rgb(185 28 28)',
            'card': 'calc(100vh - 64px]'
        },
        fontFamily: {
            sans: ['Josefin Sans', 'sans-serif'],
        },
        extend: {
            backgroundImage: {
                'header-dark': "url('/images/header-dark.png')",
                'header-light': "url('/images/header-light.jpg')",
                'register-main': "url('/images/register.png')",
                'logo-box': "url('/images/logo-box.png')",
            },
            boxShadow: {
                'shadow-input': '0px 1px 0px .05px rgb(0 0 0 / 0.1), 0px -0.5px 0px 1px rgb(0 0 0 / 0.1)',
                'dark': '0 0 0 3px #2d2f45',
                'onFocus': '0 0 0 3px #e5acd5'
            },
            height: {
                'card': 'calc(100vh - 64px]'
            }
        },
    },
    plugins: [],
}

