import './App.css';
import AuthorDetail from './AuthorDetail';
import AuthorList from './AuthorList';
import Body from './Body';
import BookDetail from './BookDetail';
import BookList from './BookList';
import Footer from './Footer';
import Header from './Headers';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import Login from './login';
import Registration from './Registration'
import Dashboard from './Dashboard'
import { useState } from 'react';


function App() {
  const [auth, setAuth] = useState(false);

  const handleLogout = () => {
      setAuth(false);
  };

    return (
        <> 
          <Router>
            <Header auth={auth}  setAuth={setAuth} handleLogout={handleLogout} />
              <Routes>
                <Route path="/" element={<Body />} />
                <Route path="books" element={<BookList />} />
                <Route path="books/:id" element={<BookDetail />} />
                <Route path="authors" element={<AuthorList />} />
                <Route path="authors/:id" element={<AuthorDetail />} />
                <Route path="admin" element={<Login setAuth={setAuth} />} />
                <Route path="registration" element={<Registration />} />
                <Route path="/dashboard" element={auth ? <Dashboard setAuth={setAuth}/> : <Login setAuth={setAuth} />} />
              </Routes>
            <Footer />
          </Router>     
        </>
    );
}

export default App;