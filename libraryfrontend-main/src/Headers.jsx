
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import BookList from './BookList';


function RedirectComponent() {
  const navigate = useNavigate();

  React.useEffect(() => {
    setTimeout(() => {
      navigate('/booklist');
    }, 2000);
  }, [navigate]);

  return <h2>Redirecting ...</h2>;
}

const Header = ({ auth, setAuth }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        setAuth(false);
        navigate('/admin');
    };
    return ( <>
<header>
    <div className="container">
        <a id="logo" href="#">
            <img src="/libraryLogo.png" alt="Library Logo" />
        </a>
        <nav>
            <ul id="navList">
                <li>
                    <Link className="navigationList" to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link className="navigationList" to="books">
                        Books
                    </Link>
                </li>
                <li>
                    <Link className="navigationList" to="authors">
                        Authors
                    </Link>
                </li>

                    {auth ? (
                        <>
                            <li><Link to="dashboard">Dashboard</Link></li>
                            <li><button onClick={handleLogout}>Logout</button></li>
                        </>
                    ) : (
                        <li><Link to="admin">Admin</Link></li>
                    )}
            </ul>
        </nav>
        <Routes>
            <Route path="/about" element={<BookList />} />
        </Routes>
    </div>
</header>
</>)
}

export default Header