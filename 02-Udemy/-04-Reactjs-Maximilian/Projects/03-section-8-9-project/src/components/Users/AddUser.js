import {useState, useRef} from 'react';
import styles from './AddUser.module.css';
import Card from "../UI/Card";
import Button from "../UI/Button";
import UsersList from "./UsersList";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const [error, setError] = useState();

    const submitHandler = e => {
        e.preventDefault();
        const userName = nameInputRef.current.value;
        const userAge = ageInputRef.current.value;

        if (
            !userName.trim().length ||
            !userAge.trim().length
        ) {
            setError({
                title: "Invalid Input",
                message: "Please enter a valid name and age (non-empty values)."
            });
            return;
        }

        if (+userAge < 1) {
            setError({
                title: "Invalid Age",
                message: "Please enter a valid age (> 0)."
            });
            return;
        }

        const newUser = {
            key: Math.floor(Math.random() * 100),
            name: userName,
            age: userAge,
        };

        props.onAddUser(newUser);

        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
    }

    const errorHandler = () => {
        setError(null);
    }

    return (
        <>
            {error && <ErrorModal error={error} onConfirm={errorHandler}/>}
            <Card className={styles.input}>
                <form onSubmit={submitHandler}>

                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id={'username'}
                        ref={nameInputRef}
                    />

                    <label htmlFor="age">Age (Years)</label>
                    <input
                        type="number"
                        id="age"
                        ref={ageInputRef}
                    />

                    <Button type={'submit'}>Add User</Button>
                </form>
            </Card>
        </>
    );
}

export default AddUser;