import React,{Component} from 'react';
import '../Assets/css/styles.css';

class Footer extends Component{
    render(){
        return(
            <footer>
                <div class="center">
                    <div class="w50">
                        <p>Email: Lorem ipsum</p>
                        <p>Telefone: (21)984545-454545</p>
                    </div>
                    <div class="w50">
                        <p class ="text-right">Todos os Direitos Reservados : Hebert Montarroyos</p>
                    </div>
                    <div class="clear"></div>
                </div>
            </footer>
        );
    }
}

export default Footer;