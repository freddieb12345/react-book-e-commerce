import React from 'react';
import BooksImg from "../assets/Undraw_Books.svg"
import { Link } from "react-router-dom"

const Landing = () => {
    return (
        <section id='landing'>
            <header>
                <div className='header__container'>
                    <div className='header__description'>
                        <h1>The UK's best online library platform</h1>
                        <h2>Find your dream book with <b className='red'>Library</b></h2>
                        <Link to="#features">
                            <button className='btn'>Browse books</button>
                        </Link>
                    </div>
                    <figure className='header__img--wrapper'>
                        <img src={BooksImg} alt="" />
                    </figure>
                </div>
            </header>
        </section>
    );
}

export default Landing;
