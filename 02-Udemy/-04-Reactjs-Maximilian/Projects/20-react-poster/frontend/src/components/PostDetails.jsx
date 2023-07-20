import {Link, useLoaderData} from 'react-router-dom';

import Modal from './Modal.jsx';
import classes from './PostDetails.module.css';

function PostDetails() {
    const post = useLoaderData();
    console.log(post);
    
    if (!post) {
        return (
            <Modal>
                <main className={classes.details}>
                    <h1>Could not find post</h1>
                    <p>Unfortunately, the requested post could not be found.</p>
                    <p>
                        <Link to=".." className={classes.btn}>
                            Okay
                        </Link>
                    </p>
                </main>
            </Modal>
        );
    }
    return (
        <Modal>
            <main className={classes.details}>
                <p className={classes.author}>{post.post.author}</p>
                <p className={classes.text}>{post.post.body}</p>
            </main>
        </Modal>
    );
}

export default PostDetails;

export async function loader({params}) {
    const res = await fetch(`http://localhost:8080/posts/${params.id}`);
    return await res.json();
}