import { useEffect, useState } from "react";
import {  Link } from 'react-router-dom';

const NewRelease = () => {
    const [books, setBooks] = useState([])
    const [loading, setLoading] = useState(true);
    const [error,setError] = useState(null);

    useEffect(() => {
        const fetchBooks = async() => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/books`);
                console.log(response);

                if (!response.ok){
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setBooks(data);
            } catch (error) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        };

        fetchBooks();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <>
            {
                books.map((book) =>  (
                    <li key={book._id} className="gridItem">
                        <Link to={`/books/${book._id}`}>
                        <img src="./bookCover.jpg" alt={book.title} />
                        <h4>{book.title}</h4>
                        <h4>{book.author.name}</h4>
                        </Link>
                    </li>
                ))
            }
        </>
    )

}
export default NewRelease;