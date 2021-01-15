import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Sobre from './Pages/Sobre';
import Contato from './Pages/Contato';
import Error from './Pages/Error';


const Routes = ()=>{
    return(
        <BrowserRouter>
        <Header/>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/sobre" component={Sobre}/>
            <Route exact path="/contato" component={Contato}/>
            <Route  path="*" component={Error}/>
        </Switch>
        <Footer/>
        </BrowserRouter>
    );
}

export default Routes;