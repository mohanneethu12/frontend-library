import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BookDetail = () => {
    const { id } = useParams(); 
    const [book, setBook] = useState(null);

    useEffect(() => {
        const fetchBook = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/books/${id}`);
                setBook(response.data);
            } catch (error) {
                console.error('Error fetching book details:', error);
            }
        };

        fetchBook();
    }, [id]);

    if (!book) {
        return <div>Loading...</div>;
    }

    return (
        <>
        <div className="book-detail">
            <div className="book-image">
                <img src={book.imagelink ? book.imagelink : `${import.meta.env.VITE_APP_URL}/bookCover.jpg`} 
                alt={book.title} />
            </div>
            <div className="book-info">
                <h1 className="book-title">{book.title}</h1>
                <h3 className="book-author">by {book.author.name}</h3>
                <p className="book-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <ul className="book-meta">
                    <li>
                        <strong>Published:</strong> {new Date(book.publishedDate).toDateString()}
                    </li>
                    <li>
                        <strong>Pages:</strong> {book.pages}
                    </li>
                    <li>
                        <strong>Genre:</strong> {book.genre}
                    </li>
                </ul>
            </div>
        </div>
    </>

    );
};

export default BookDetail;
