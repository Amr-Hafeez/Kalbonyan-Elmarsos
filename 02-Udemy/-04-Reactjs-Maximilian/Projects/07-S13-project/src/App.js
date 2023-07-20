import UserFinder from './components/UserFinder';
import UsersContext from './store/users-context';

const DUMMY_USERS = [
    {id: 'u1', name: 'Max'},
    {id: 'u2', name: 'Manuel'},
    {id: 'u3', name: 'Amr'},
    {id: 'u4', name: 'Yousef'},
    {id: 'u5', name: 'Kareem'},
    {id: 'u6', name: 'Mohammed'},
    {id: 'u7', name: 'Ahmed'},
];

function App() {
    const usersContext = {
        users: DUMMY_USERS
    }

    return (
        <UsersContext.Provider value={usersContext}>
            <UserFinder/>
        </UsersContext.Provider>
    );
}

export default App;
