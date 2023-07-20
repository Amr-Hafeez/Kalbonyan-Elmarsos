import classes from './UsersList.module.css';
import Card from "../UI/Card";

const UsersList = props => {
    // console.log(props.usersList);
    return (
        props.usersList.length !== 0 &&
        <Card className={classes.users}>
            <ul>
                {props.usersList.map(user => (
                    <li key={user.key}> {`${user.name} (${user.age} Years old)`}</li>
                ))}
            </ul>
        </Card>
    )
}

export default UsersList;