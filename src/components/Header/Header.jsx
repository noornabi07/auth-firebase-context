import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../provider/AuthProvider';

const Header = () => {
    const {user, logOut} = useContext(UserContext)
    const handleLogOut = () =>{
        logOut()
        .then(() =>{})
        .catch(error => console.error(error))
    }
    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <a className="btn btn-ghost normal-case text-xl">Auth Master</a>
                <Link className="btn btn-ghost normal-case text-xl" to="/">Home</Link>
                <Link className="btn btn-ghost normal-case text-xl" to="/service">Service</Link>
                {
                    user && <Link className="btn btn-ghost normal-case text-xl" to="/profile">Profile</Link>
                }
                <Link className="btn btn-ghost normal-case text-xl" to="/orders">Orders</Link>
                <Link className="btn btn-ghost normal-case text-xl" to="/login">Login</Link>
                <Link className="btn btn-ghost normal-case text-xl" to="/register">Register</Link>

                {
                    user ? <div>
                        <span>{user.email}</span>
                        <button onClick={handleLogOut} className="btn btn-xs ml-3">Sign Out</button>
                    </div> : <Link to="/login">Login</Link>
                }
            </div>
        </div>
    );
};

export default Header;