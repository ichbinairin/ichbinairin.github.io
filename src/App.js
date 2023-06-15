import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from "./components/Header/navbar";
import MuseumOfCandy from './MuseumOfCandy';
import About from "./pages/About";
import Products from "./pages/Products";
import NotFound from "./pages/NotFound";

class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <NavBar />
                    <Routes>
                        <Route strict path='/about' element={<About />} />
                        <Route strict path='/products' element={<Products />} />
                        <Route path='/' element={<MuseumOfCandy />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Router>
            </div>
        );
    }
}

export default App;