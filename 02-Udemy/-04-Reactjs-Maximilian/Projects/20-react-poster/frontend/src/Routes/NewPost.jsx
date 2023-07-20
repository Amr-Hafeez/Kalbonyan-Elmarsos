import classes from './NewPost.module.css';
import Modal from "../components/Modal.jsx";
import {Form, Link, redirect} from "react-router-dom";

function NewPost() {

    return (
        <Modal>
            <Form method={'post'} className={classes.form}>
                <p>
                    <label htmlFor="body">Text</label>
                    <textarea name={'body'} id="body" required rows={3} />
                </p>
                <p>
                    <label htmlFor="name">Your name</label>
                    <input
                        name={'author'}
                        type="text"
                        id="name"
                        required
                    />
                </p>
                <p className={classes.actions}>
                    <Link to={'..'} type={'button'} >Cancel</Link>
                    <button>Submit</button>
                </p>
            </Form>
        </Modal>
    );
}

export default NewPost;


export async function action({request}) {
    const formData = await request.formData();
    const postData = Object.fromEntries(formData);
    await fetch('http://localhost:8080/posts', {
        method: 'POST',
        body: JSON.stringify(postData),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    
    return redirect('/');
}
