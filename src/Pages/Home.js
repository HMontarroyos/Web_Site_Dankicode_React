import React,{Component} from 'react';
import '../Assets/css/font-awesome.min.css';
import Box from '../Components/Box_single_loja';
import Noticias from '../Components/Box_single_noticias';

class Home extends Component{
    render(){
        return(
            <div>
                <section class="texto-chamada">
                    <div class="center">
                        <i class="fa fa-facebook"></i>
                        <h2>Conheça nossos <b>cursos</b></h2>
                        <h3>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</h3>
                    </div>
                </section>
                <section class="loja">
                    <div class="center">
                        <Box/>
                        <Box/>
                        <Box/>
                        <Box/>
                        <Box/>
                        <Box/>
                    </div>
                </section>
                <br/>
                <section class="texto-chamada">
                    <div class="center">
                        <i class="fas fa-bullhorn"></i>
                        <h2>Ultimas novidades da <b>Art Designer</b></h2>
                        <h3>Fique por dentro de todas as novidades!</h3>
                    </div>
                </section>
                <section class="novidades">
                    <div class="center">
                        <div class="w50 noticias">
                            <h1>Ultimas Noticias</h1>
                            <Noticias/>
                            <Noticias/>
                            <Noticias/>
                        </div>
                        <div class="w50 depoimentos">
                            <h1>Ultimos Depoimentos</h1>
                            <ul>
                                <li>O melhor curso que já fiz </li>
                                <li>O melhor curso que já fiz </li>
                                <li>O melhor curso que já fiz </li>
                                <li>O melhor curso que já fiz </li>
                            </ul>
                        </div>
                        <div class="clear"></div>
                    </div>
                </section>
            </div>

        );
    }
}

export default Home;