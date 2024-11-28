import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const AuthorDetail = () => {
    const { id } = useParams(); 
    const [author, setAuthor] = useState(null);

    useEffect(() => {
        const fetchAuthor = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/author/${id}`);
                setAuthor(response.data);
                console.log(response.data)
            } catch (error) {
                console.error('Error fetching author details:', error);
            }
        };

        fetchAuthor();
    }, [id]);

    if (!author) {
        return <div>Loading...</div>;
    }

    return (
        <>
        <div className="author-detail">
            <div className="author-image">
                <img className="projectImage" src={author.imageLink ?  author.imageLink : `${import.meta.env.VITE_APP_URL}/user.png`} />
            </div>
            <div className="author-info">
                <h1 className="author-name">{author.name}</h1>
                <p className="author-bio">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
                    tincidunt justo a felis viverra, a ultrices arcu fermentum. Aliquam erat
                    volutpat.
                </p>
                <ul className="author-meta">
                    <li>
                        <strong>Born:</strong> {new Date(author.birthdate).toDateString()}
                    </li>
                    <li>
                        <strong>Nationality:</strong> {author.nationality}
                    </li>
                </ul>
                <h3 className="author-books-title">Books by {author.name}</h3>
                <ul className="author-books">
                    <li>Book Title 1</li>
                    <li>Book Title 2</li>
                    <li>Book Title 3</li>
                </ul>
            </div>
        </div>
    </>

    );
};

export default AuthorDetail;
