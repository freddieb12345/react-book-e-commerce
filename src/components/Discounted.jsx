import React from 'react';
import { books } from "../data"
import Book from './ui/Book';

const Discounted = () => {
    return (
        <section id="recent">
            <div className="container">
                <div className="row">
                    <div className="section__title">
                        <h2>Discounted <b className='red'>Books</b></h2>
                    </div>
                    <div className="books">
                        {books //Filters over the books data, and returns any book with a sale price, and then returns the first 8 results.
                            .slice()
                            .filter(book => book.salePrice > 0)
                            .splice(0, 8)
                            .map(book => (
                            <Book book={book} key={book.id} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Discounted;
