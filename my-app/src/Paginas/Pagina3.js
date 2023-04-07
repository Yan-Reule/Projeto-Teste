import React from "react";
import { Link } from 'react-router-dom';
import blocosmit from '../assets/blocosmit.jpg';
import esp from '../assets/esp.webp';
import telacell from '../assets/telacellmit.png';
import ide from '../assets/ide.jpg';


function Pagina3(){
    return(
        <div>
            <div className="sup">
                <div className="sla2">
                    <Link to='/Pagina2'><button className="btnavancar2"><strong>Voltar</strong></button></Link>
                </div>

                <div className="cabecalho"> 
                    <h1>Considerações finais</h1>
                    <p>sobre o desafio proposto</p>
                </div>
                <div className="sla2">
                    <Link to='/'><button className="btnavancar2"><strong>Inicio</strong></button></Link>
                </div>
            </div>
            <div className="cabecalho">
            <h3>Desafio proposto: </h3>
                <div className="contorno2">
                    <ul>
                        <li> <strong>Criar um novo aplicativo React que tenha no mínimo 3 páginas.</strong> </li>
                        <li> <strong>página inicial é necessário ter uma área com um formulário de contato.</strong></li>
                        <li> <strong>Criar uma conta no GitHub.</strong></li>
                        <li> <strong>Iniciar um novo repositório com o nome do seu projeto em React.</strong></li>
                        <li> <strong>Subir seu projeto para o repositório criado.</strong></li>
                    </ul>
                </div>
            </div>
            
            <div className="cabecalho">
                <h2>dia 1:</h2>
                <div className="contorno">
                    <p>Estudar sobre JavaScript</p>
                </div>
            </div>

            <div className="cabecalho">
                <h2>dia 2:</h2>
                <div className="contorno">
                    <p><strong>Durante o dia: </strong>Cria layout em HTML/CSS de um formulario.</p> 
                    <p><strong>Durante o dia: </strong>Aplicar JavaScript no código criado, "assim poderei usar react no JavaScript".</p>
                    <p><strong>Tarde da noite: </strong>Estudar react, e perceber que o buraco é mais em baixo.</p>
                </div>
            </div>

            <div className="cabecalho">
                <h2>dia 3:</h2>
                <div className="contorno">
                    <p><strong>Durante o dia: </strong>Etudar react, e resolver problemas de instalação em meu computador.</p> 
                    <p><strong>Durante o dia: </strong>resolver erros de instalação no terminal. "Está tudo supostamente funcionando".</p> 
                    <p><strong>Durante o dia: </strong>Criar primeira pagina em react.</p> 
                    <p><strong>Durante a noite: </strong>Deu ruim. Muitos erros ao tentar linkar mais paginas</p> 
                </div> 
            </div>

            <div className="cabecalho">
                <h2>dia 4:</h2>
                <div className="contorno">
                    <p><strong>Durante o dia: </strong>Criar varios projetos em react, afim de resolver o problema de linkar paginas.</p> 
                    <p><strong>Durante o dia: </strong>Entender o erro/solucionar o mesmo.</p> 
                    <p><strong>Durante o dia: </strong>Criar primeira pagina em react.</p> 
                    <p><strong>Durante a noite: </strong>Criar segunda pagina em react.</p>
                    <p><strong>tarde da noite: </strong>Criar terceira pagina em react.</p>
                </div>
            </div>
            <div className="cabecalho">
                <h2>Projetos anteriores</h2>
                <div className="contorno">
                    <h3>Sistema de automção residencial</h3> 
                    <p>utilizando ESP32 e MITapp inventor</p>
                    <div className="sla3">
                        <div className="contorno">    
                            <div>
                                <strong>ESP32</strong>
                            </div>
                            <p className="txt2">
                                ESP32 é um microcontrolador, 
                                Ele pode conectar-se a redes Wi-Fi, controlar motores e sensores, e processar dados em tempo real. 
                                Popular entre desenvolvedores de projetos de IoT e automação residencial.
                            </p>
                        </div>
                        <div className="contorno">
                            <div>
                                <strong>MIT App Inventor</strong>
                            </div>
                            <p className="txt2">
                            MIT App Inventor é uma plataforma online que permite a criação de 
                            aplicativos móveis para Android de forma intuitiva e simplificada. 
                            É uma ferramenta acessível e útil para quem deseja desenvolver aplicativos móveis personalizados.
                            </p>
                            
                        </div>
                        

                    </div>
                    <div className="sla3">
                        <div className="contorno">    
                            <div>
                                <strong>ESP32</strong>
                            </div>
                            <div>
                                <img className="animação2" src={esp} alt="Minha Imagem" />
                                <img className="animação2" src={ide} alt="Minha Imagem" />
                            </div>
                            
                        </div>
                        <div className="contorno">
                            <div>
                                <strong>MIT App Inventor</strong>
                            </div>
                            <div>
                                <img className="animação2" src={blocosmit} alt="Minha Imagem" />
                                <img className="animação2" src={telacell} alt="Minha Imagem" />
                            </div>
                              
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    )
}
export default Pagina3;