import React,{Component} from 'react';
import '../Assets/css/font-awesome.min.css';
import Img from '../Assets/img/construcao.png';


class Sobre extends Component{
    render(){
        return(
            <div>
                <h1>Pagina Sobre em Construção</h1>
                <img src={Img} alt="construção"/>
            </div>

        );
    }
}

export default Sobre;