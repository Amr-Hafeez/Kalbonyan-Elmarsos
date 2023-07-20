import {useAppContext} from "./context/appContext.jsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {HelmetProvider} from "react-helmet-async";


import RootLayout from "./layouts/RootLayout.jsx";
import ErrorPage from "./layouts/ErrorPage.jsx";
import Register from "./layouts/Register.jsx";
import Login from "./layouts/Login.jsx";
import Dashboard from "./layouts/Dashboard.jsx";
import UserInfo from "./layouts/UserInfo.jsx";
import Alert from "./components/Alert.jsx";
import ProtectedRoute from "./utils/ProtectedRoute.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        children: [
            {
                index: true,
                element: <ProtectedRoute>
                    <Dashboard/>
                </ProtectedRoute>
            },
            {
                path: ':name',
                element: <UserInfo/>
            }
        ]
    },
    {
        path: 'register',
        element: <Register/>
    },
    {
        path: 'login',
        element: <Login/>
    },
    {
        path: '*',
        element: <ErrorPage/>
    }
]);


const App = () => {
    const {lang} = useAppContext();
    return (
        <div className={'dark:bg-bg min-h-screen relative overflow-x-hidden'}
             style={{direction: `${lang === 'ar' ? 'rtl' : 'ltr'}`}}
        >
            <Alert/>
            <HelmetProvider>
                <RouterProvider router={router}/>
            </HelmetProvider>
        </div>
    );
};

export default App;
