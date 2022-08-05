import React from 'react';
import Book from './ui/Book';
import { books } from '../data'

const Featured = () => {
    return (
        <div>
            <section id="features">
                <div className='container'>
                    <div className='row'>
                        <h2 className='section__title'>
                            Featured <b className='red'>Books</b>
                        </h2>
                        <div className='books'>
                            {books //filters over the books array and returns only books with a rating of 5
                                .slice()
                                .filter((book) => book.rating === 5)
                                .slice(0, 4)
                                .map((book) => (
                                    <Book book= {book} key={book.id} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Featured;
