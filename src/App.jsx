import "./App.css";
import {
    Navigate,
    Route,
    Routes,
    NavLink,
    Link,
    useParams,
} from "react-router-dom";

function App() {
    function Main() {
        return (
            <div>
                <h2>Main Page</h2>
                <NavLink to="/users">Users List</NavLink>
            </div>
        );
    }
    const Users = () => {
        const param = useParams();
        console.log(param);

        const data = [
            { id: 1, name: "User" },
            { id: 2, name: "User" },
            { id: 3, name: "User" },
            { id: 4, name: "User" },
            { id: 5, name: "User" },
        ];
        return (
            <div>
                <h1>Users List Page</h1>
                <NavLink to="/">Main</NavLink>
                {data.map((el) => (
                    <ul key={el.id}>
                        <li>
                            <Link to={`${el.id}`}>{`${el.name} ${el.id}`}</Link>
                        </li>
                    </ul>
                ))}
            </div>
        );
    };
    const User = () => {
        const { userId } = useParams();

        return (
            <div>
                <h2>User Page</h2>
                <ul>
                    <li>
                        <Link to="/users">Users List</Link>
                    </li>
                    <li>
                        <Link to="edit">Edit User</Link>
                    </li>
                </ul>

                <h4>{`userId: ${userId}`}</h4>
            </div>
        );
    };
    const Edit = () => {
        const { userId } = useParams();
        console.log("userId", userId);

        return (
            <>
                <h1>UserPageEdit</h1>
                <h3>User: {userId}</h3>
                <ul>
                    <li>
                        <Link to={`/users/${Number(userId)}`}>User Page</Link>
                    </li>
                    <li>
                        <Link to={`/users/${Number(userId) + 1}`}>
                            Another User Page
                        </Link>
                    </li>
                    <li>
                        <Link to="/users">Users List</Link>
                    </li>
                </ul>
            </>
        );
    };
    return (
        <div>
            <Routes>
                <Route path="" element={<Main />} />
                <Route path="users/">
                    <Route index element={<Users />} />
                    <Route path=":userId/">
                        <Route index element={<User />} />
                        <Route path="profile" element={<User />} />
                        <Route path="edit" element={<Edit />} />
                        <Route path="*" element={<Navigate to="profile" />} />
                    </Route>
                </Route>
                <Route path="*" element={<Navigate to="" />} />
            </Routes>
        </div>
    );
}

export default App;
