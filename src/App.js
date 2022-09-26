import React from 'react';
import './App.css';
import BlogComponent from './components/Blog/BlogComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import BlogForm from './components/Form/BlogForm';
import {Container, Row} from 'react-bootstrap';
import Navbar from './components/include/NavbarComponent.js'
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Blog from './components/pages/Blog';
import PageNotFound from './components/pages/PageNotFound';
import BlogSingle from './components/pages/BlogSingle';
import {BrowserRouter, Routes, Route } from "react-router-dom";

// const getData = () =>
// {
//     axios.get('https://newsapi.org/v2/everything?q=apple&from=2022-08-07&to=2022-08-07&sortBy=popularity&apiKey=568cabcb76ed42cfb72bf7d8ffc7d703')
//         .then((response) => {
//             console.log(response.data.articles);
//         // setBlogs(response.data);
//           });
// }

    const App = () => {
        return (
            <div>
                <Navbar />
                <Routes>
                        <Route path="/home" element={<Home/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/blog" element={<Blog/>} />
                        <Route path="/blog/:slug" element={<BlogSingle/>}/>
                        <Route path="/contact" element={<Contact/>}/>
                </Routes>
            </div>
         );
}

export default App;