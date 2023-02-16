import React from 'react'


const Navbar = () => {
    return (
        <div>
            <nav>
                <h2>Fitness Tracker</h2>
                <ul>
                    <li>
                        <a href="/">HOME</a>
                    </li>
                    <li>
                        <a href="/profile">PROFILE</a>
                    </li>
                    <li>
                        <a href="/signup">SIGNUP</a>
                    </li>
                    <li>
                        <a href="/login">LOGIN</a>
                    </li>
                    <li>
                        <a href="/posts">POSTS</a>
                    </li>
                </ul>
            </nav>

        </div>
    );
};

export default Navbar;