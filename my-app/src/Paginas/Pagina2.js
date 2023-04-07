import React from "react";
import { Link } from 'react-router-dom';
import mao from '../assets/Mão.jpeg';
import moça from '../assets/Moça.jpeg';
import taça from '../assets/Taça.jpeg';
import caveira from '../assets/Caveira.jpg';
import artedigital from '../assets/MinhaArteDigital.png';
import primeiroskt from '../assets/PrimeiroSkt.webp';
import segundoskt from '../assets/SegundoSkt.jpg';
import sk8 from '../assets/sk8.png';
import lego from '../assets/lego.jpeg';
import valorant from '../assets/valorant.jpeg';
import call from '../assets/call.jpeg';


<div className="contorno"></div>
function Pagina2(){
    return(
        <div>
            <div className="sup">

                <div className="sla2">
                    <Link to='/'><button className="btnavancar2"><strong>Voltar</strong></button></Link>
                </div>
                
                <div className="cabecalho2"><h1>Hobbies</h1> </div>
                
                <div className="sla2">
                    <Link to='/Pagina3'><button className="btnavancar2"><strong>Avançar</strong></button></Link>     
                </div>
               
            </div>
            
            <div className="blocospg2">
                <div className="cabecalho">
                    <h2>Desenhar</h2>
                    <div className="txt">
                        <div className="contorno">
                            <h3>contexto</h3> 
                            <p>"Sempre gostei de desenhar, principalmente em sala de aula. Eu adorava a aula de artes. Acabei fazendo um curso online de desenho em um ateliê de Cascavel."</p> 
                        </div>
                    </div>
                    <div>
                        <div className="desenhos">
                            <img className="animação" src={mao} alt="Minha Imagem" />
                        </div>
                        <div className="contorno"><p>Minha mão de observação</p></div>
                        
                        <div className="desenhos">
                            <img className="animação" src={moça} alt="Minha Imagem" />
                        </div>
                        <div className="contorno"><p>Rosto de observação</p></div>
                        
                        <div className="desenhos">
                            <img className="animação" src={taça} alt="Minha Imagem" />
                        </div>
                        <div className="contorno"><p>Taça de observação</p></div>
                        
                        <div className="desenhos">
                            <img className="animação" src={caveira} alt="Minha Imagem" />
                        </div>
                        <div className="contorno"><p>Caveira com capacete samurai</p></div>
                        
                        <div className="desenhos">
                            <img className="animação" src={artedigital} alt="Minha Imagem" />
                        </div>
                        <div className="contorno"><p>Minha arte digital</p></div>
                        
                    </div>
                </div>
                <div className="cabecalho">
                    <h2>Skate</h2>
                    <div className="txt">
                        <div className="contorno">
                            <h3>contexto</h3>
                            <p>"Eu comecei a andar de skate, no dia 16 de novembro de 2021. Aprendi no maximo 2 manobras.
                                A frase que mais me marcou é <strong>"Skate é arte, cair faz parte"</strong>.
                                Não estou andando muito ultimamente, mas quero voltar"</p>
                        </div>
                    </div>
                    <div>
                        <div className="desenhos">
                            <img className="animação" src={primeiroskt} alt="Minha Imagem" />
                        </div>
                        <div className="contorno"><p>Meu primeiro skate</p></div>
                        
                        <div className="desenhos">
                            <img className="animação" src={segundoskt} alt="Minha Imagem" />
                        </div>
                        <div className="contorno"><p>Meu segundo skate</p></div>
                        
                        <div className="desenhos">
                            <img className="animação" src={sk8} alt="Minha Imagem" />
                        </div>
                        <div className="contorno"><p>Skate com amigos</p></div>
                        
                    </div>
                    
                </div>
                <div className="cabecalho">
                    <h2>Jogar</h2>
                    <div className="txt">
                        <div className="contorno">
                            <h3>contexto</h3>
                            <p>"Como um bom jovem que passa tempo demais na frente de uma tela, desde muito novo, eu sempre gostei de jogar, tanto que reprovei no oitavo ano por jogar roblox kkkkk."</p>
                        </div>
                    </div>
                    <div>
                        <div className="desenhos">
                            <img className="animação" src={valorant} alt="Minha Imagem" />
                        </div>
                        <div className="contorno"><p>O bom e velho Valorant</p></div>
                        
                        <div className="desenhos">
                            <img className="animação" src={lego} alt="Minha Imagem" />
                        </div>
                        <div className="contorno"><p>Lego Batman</p></div>
                        
                        <div className="desenhos">
                            <img className="animação" src={call} alt="Minha Imagem" />
                        </div>
                        <div className="contorno"><p>Call com os amigos</p></div>
                        
                    </div>
                    
                </div>
            </div>
            

        </div>
    )
}
export default Pagina2;