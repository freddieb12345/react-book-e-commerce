import React, { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import Books from "./pages/Books";
import { books } from './data'
import BookInfo from "./pages/BookInfo";
import Cart from "./pages/Cart";

function App() {
  const [cart, setCart] = useState([]);

  //Adds the book parameter to the cart array, by using the spread array on the cart. Also adds the quantity parameter to the book,
  //by using the spread parameter on the book object.
  function addToCart(book) {
    setCart([...cart, {...book, quantity: 1}])
  }

  //maps over the cart, and checks if the item.id is equal to the book.id, and if it is, it uses the spread parameter to add the quantity parameter
  //to the item, and then returns it
  function changeQuantity(book, quantity) {
    setCart(cart.map(item => 
      item.id === book.id 
        ? {
            ...item, quantity: +quantity //the "+" makes ure the quantity is a number and not a string
          } 
          : item
    ))
  }
  
  //filter's over the cart item, and returns an array that doesn't have the the item with the item.id
  function removeItem(item) {
    setCart(cart.filter(book => book.id !== item.id))
  }

  //Function that creates the counter variable, the loops over the cart, and adds each item.quantity to the counter, thereby getting a count
  //of how many items are in the cart
  function numberOfItems() {
    let counter = 0;
    cart.forEach(item => {
      counter += item.quantity
    })
    return counter
  }

  useEffect(() => {
    console.log(cart)
  }, [cart])

  return (
    <Router>
      <div className="App">
          <Nav numberOfItems={numberOfItems()}/>
          <Routes>
            <Route path="/" exact element={<Home />} />  
            <Route path="/books" exact element={<Books books = {books}/>} />  
            <Route path="/books/:id" element={<BookInfo books = {books} addToCart={addToCart} cart={cart}/>}/>
            <Route path="/cart" element={<Cart books = {books} cart={cart} changeQuantity={changeQuantity} removeItem={removeItem}/>}/>
          </Routes>
          <Footer />
      </div>
    </Router>
  );
}

export default App;
