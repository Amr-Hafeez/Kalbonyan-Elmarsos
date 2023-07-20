import {useLoaderData} from "react-router-dom";
import Post from "./Post.jsx";
import classes from './PostsList.module.css';

const PostsList = () => {
    const posts = useLoaderData();
    
    return (
        <>
            {
                posts.length > 0 &&
                <ul className={classes.posts}>
                    {
                        
                        posts.map(p => (
                                <Post key={p.id} id={p.id} author={p.author} text={p.body}/>
                            )
                        )
                    }
                </ul>
            }
            {
                posts.length === 0 &&
                <div style={{textAlign: 'center', color: 'white'}}>
                    <h2>There are no posts yet.</h2>
                    <p>Start adding some!</p>
                </div>
            }
            
        </>
    )
}

export default PostsList;