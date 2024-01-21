import React, { useState } from 'react';
import { useFetchBooksQuery } from '../redux/BooksApi';
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

const Books = () => {
    const token = useSelector((state) => state.token);
    const { data = {}, error, isLoading } = useFetchBooksQuery();
    const [searchTerm, setSearchTerm] = useState('');

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredBooks = data.books.filter((book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <div className="nav-bar">
                <div className="search-bar">
                    <TextField
                        label="Search for a book"
                        placeholder="Search for a book"
                        size="small"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                </div>
            </div>

            <div className="books-list">
                {filteredBooks.filter((book) => {
                    if (!token) {
                        return true
                    }
                    return book.available
                }).map((book) => (
                    <div key={book.id} className="book-card">
                        <img className="book-image" src={book.coverimage} alt={book.title} />
                        <div className="book-details">
                            <h2 className="book-title">Title: {book.title}</h2>
                            <h2 className="book-author">Author: {book.author}</h2>
                        </div>
                        <Link to={`/books/${book.id}`} className="details-link">
                            <button className="see-details-button">See Details</button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Books;
