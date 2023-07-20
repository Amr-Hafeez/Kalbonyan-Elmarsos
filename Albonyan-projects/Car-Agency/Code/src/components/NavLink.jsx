const NavLink = (props) => {
    return (
        // eslint-disable-next-line react/prop-types
        <li className={`  font-bold
            `}
            /* eslint-disable-next-line react/prop-types */

            /* eslint-disable-next-line react/prop-types */
            onClick={props.onClick}
        >
            {/* eslint-disable-next-line react/prop-types */}
            <a id={props.id} className={`${props.isActive === props.id ? 'bg-second' : ''} 
                    text-lg block tracking-wide p-[4px_15px] cursor-pointer
                    md:rounded
                    max-[768px]:p-[15px_0_15px_30px] 
                `}
               /* eslint-disable-next-line react/prop-types */
               href={`#${props.id}-section`}>{props.children}</a>
        </li>

    )
}


export default NavLink;