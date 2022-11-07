import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Clouds } from '../components/clouds/Clouds';
import { Hero } from '../components/hero/Hero';
import Home from '../components/home/Home';
export const RoutesApp = () => {
    return (
        <Routes>
            <Route
                path='/:category/search/:keyword'
                element={<h1>Hola mundo</h1>}
            />
            {/* <Route
                path='/:category/:id'
                element={<h1>Hola mundo</h1>}
            /> */}
            {/* <Route
                path='/:category'
                element={<h1>Hola mundo</h1>}
            /> */}
            {/* <Route
                path='/'
                exact
                element={<h1>Hola mundo</h1>}
            /> */}
            **<Route path="*" element={<Home />}></Route>**
        </Routes>
    );
}
