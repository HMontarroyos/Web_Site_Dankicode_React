import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import '../Assets/css/styles.css';

class Header extends Component{
    render(){
        return(
            <header>
                <div class="center">
                    <div class="logo">Arte Designer</div>
                    <div class="menu">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/sobre">Sobre</Link></li>
                            <li><Link to="/contato">Contato</Link></li>
                        </ul>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;