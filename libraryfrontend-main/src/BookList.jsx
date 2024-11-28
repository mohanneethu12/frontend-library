import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {  Link } from 'react-router-dom';


const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/books`); 
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <section>
        <div className="container">
            <ul className="books">
   
      {books.map((book) => (
			<li key={book._id} className="gridItem">
				<Link to={`/books/${book._id}`}>
         	 	<img 
            		src={book.author.imagelink ? book.author.imagelink : `${import.meta.env.VITE_APP_URL}/bookCover.jpg`} 
            		alt={`${book.author.name}'s portrait`} 
          		/>
					<h4>{book.title}</h4>
					<h4>{book.author.name}</h4>
					</Link>
			</li>
      ))}
            </ul>
        </div>
    </section>
  );
};

export default BookList;
