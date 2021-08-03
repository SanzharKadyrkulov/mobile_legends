import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Home from '../components/Home/Home';
import ProductContextProvider from '../contexts/ProductContext';

const Routes = () => {
    return (
        <BrowserRouter>
        <ProductContextProvider>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home}/>
            </Switch>
            <Footer/>
        </ProductContextProvider>
        </BrowserRouter>
    );
};

export default Routes;