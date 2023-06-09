import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from "./components/Header/navbar";
import MuseumOfCandy from './MuseumOfCandy';
import Home from "./pages/navbar/Home";
import About from "./pages/navbar/About";
import Products from "./pages/navbar/Products";
import NotFound from "./pages/navbar/NotFound";
import ScrollHandler from './components/ScrollHandler';

class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <NavBar />
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route strict path='/about' element={<About />} />
                        <Route strict path='/products' element={<Products />} />
                        <Route path="*" element={<NotFound />} />

                    </Routes>
                </Router>
                <ScrollHandler/>
                <MuseumOfCandy />
            </div>
        );
    }
}

export default App;