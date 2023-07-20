
// eslint-disable-next-line react/prop-types
const NavLink = ({id, icon, handler, isActive}) => {
    return (
        <a href={`${id === 'header' ? '#' : `#${id}`}`}
           className={`${isActive === id ? 'active' : ''}`}
           id={id}
           // onClick={(e) => handler(e)}
        >{icon}</a>
    );
};

export default NavLink;
