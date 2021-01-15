import React,{Component} from 'react';
import '../Assets/css/styles.css';
import Img from '../Assets/img/bg.jpg';

class Box extends Component{
    render(){
        return(
            <div class="loja-wraper">
            <div class="box-single-loja">
                <img src={Img} alt="background"/>
                <h2>Curso de Exemplo</h2>
                <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
                <a href="">Conhecer o Curso!</a>
            </div>
            </div>
        );
    }
}

export default Box;



