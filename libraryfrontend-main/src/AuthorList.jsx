import { useEffect, useState } from "react";
import {  Link } from 'react-router-dom';

const AuthorList = () => {
    const [authors, setAuthors] = useState([])
    const [loading, setLoading] = useState(true);
    const [error,setError] = useState(null);

    useEffect(() => {
        const fetchAuthors = async() => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/author`);

                if (!response.ok){
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setAuthors(data);
            } catch (error) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        };

        fetchAuthors();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
       <>
        <section>
            <div className="container project">
                <h2>Popular Authors</h2>
                <ul id="projectList">
            {
                authors.map((author) =>  (
                    <li key={author._id}>
                        <Link to={`/authors/${author._id}`}>
                        <img className="projectImage" src={author.imageLink ?  author.imageLink : './user.png'} />
                        <h4>{author.name}</h4>
                        <p>nationality : {author.nationality}</p>
                        </Link>
                    </li>
                ))
            }
                </ul>
            </div>
        </section>
        </>
    )

}
export default AuthorList;