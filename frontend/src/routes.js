import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './pages/Home';
import Tale from './pages/Tale';
import Tales from './pages/Tales';

export default function Routes(){
    return(
        <BrowserRouter>
            <Route path='/' exact component={Home} />
            <Route path='/tale' component={Tale} />
            <Route path='/tales' component={Tales} />
        </BrowserRouter>
    );
}