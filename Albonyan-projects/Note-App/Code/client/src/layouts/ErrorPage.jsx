import { Link } from 'react-router-dom'

const ErrorPage = () => {
    return (
        <div
            className={` mx-8 md:mx-auto flex items-center h-screen
                 justify-center text-center container'
            `}
        >
            <div>
                <img
                    src={'/images/not-found.svg'}
                    alt='not found'
                    className={`
                        w-[600px]
                        max-w-full
                        block
                        mb-4
                    `}
                />
                <h3 className={'mb-2'}>Ohh! page not found</h3>
                <p className={'mt-0 mb-2 text-gray-500'}>We can't seem to find the page you're looking for</p>
                <Link
                    to='/'
                    className={'text-primary underline capitalize'}
                >back home</Link>
            </div>
        </div>
    )
}

export default ErrorPage
