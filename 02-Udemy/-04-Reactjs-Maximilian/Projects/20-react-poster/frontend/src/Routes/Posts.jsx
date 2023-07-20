import PostsList from "../components/PostsList.jsx";
import {Outlet} from "react-router-dom";

function Posts() {
    
    return (
        <>
            <Outlet/>
            <main>
                <PostsList />
            </main>
        </>
    )
}

export default Posts;

export async function loader() {
    const res = await fetch('http://localhost:8080/posts');
    const data = await res.json();
    console.log(data.posts);
    return data.posts;
}