import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Posts, {loader as postsLoader} from "./Routes/Posts.jsx";
import NewPost, {action as addPostAction} from "./Routes/NewPost.jsx";
import RootLayout from "./Routes/RootLayout.jsx";
import PostDetails, {loader as postDetailsLoader} from "./components/PostDetails.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        children: [
            {
                path: '/' ,
                element: <Posts/>,
                loader: postsLoader,
                children: [
                    {
                        path: 'create-post',
                        element: <NewPost/>,
                        action: addPostAction
                    },
                    {
                        path: ':id',
                        element: <PostDetails/>,
                        loader: postDetailsLoader
                    }
                
                ]
            },
        ]
    },
    
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
)
