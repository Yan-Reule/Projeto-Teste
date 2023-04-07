import React from "react";
import { Link } from 'react-router-dom';
import MinhaImagem from '../assets/eu.jpg';
import Dados from "../Dados";

function Pagina1(){
    return(
        <div className="prim">
            
            <div className="formulario">
                <h1>Entre em Contato</h1>
                <form>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Seu email" required />
                    
                    <label htmlFor="nome">Nome</label>
                    <input type="text" id="nome" name="nome" placeholder="Seu nome" required />
                    
                    <label htmlFor="numero">Número</label>
                    <input type="tel" id="numero" name="numero" placeholder="Seu número de telefone" />
                    
                    <label htmlFor="comentario">Comentário</label>
                    <textarea id="comentario" name="comentario" rows="5" placeholder="Escreva seu comentário"></textarea>
                    
                    <button className="btnenviar" type="submit"><strong>Enviar</strong></button>
                </form>
            </div>

            <div className="cabecalho">
                <div>
                    <img src={MinhaImagem} alt="Minha Imagem" style={{ 
                            width: '100px', 
                            height: '100px', 
                            borderRadius: '50%', 
                            boxShadow: '2px 2px 2px gray' 
                        }}/>
                    <h1>Yan Carlos Reule Souza</h1> 
                        
                    <div className='contorno'>
                        <div className="sla">
                            <Dados dados='Nome: ' sobre='yan'/> 
                            <Dados dados='Idade: ' sobre='20'/>
                            <Dados dados='Altura: ' sobre='1.92'/> 
                            <Dados dados='Contato: ' sobre='44-997000748'/> 
                        </div>                    
                    </div>
                    <div className='contorno'>
                        <Dados dados='Graduação: ' sobre='ENG.SOFTWARE'/>
                        <Dados dados='Periodo: ' sobre='1/8'/>
                        <Dados dados='Escolaridade: ' sobre='TEC.Informática'/>
                        <Dados dados='Objetivos: ' sobre='Ser um Desenvolvedor'/> 
                    </div>
                    <div className='contorno'>
                        <Dados dados='Objetivo: ' sobre='DEV'/>
                    </div>
                    <Link to='/Pagina2'><button className="btnavancar"><strong>Avançar</strong></button></Link>
                </div>

            </div>
        </div>
    )
}
export default Pagina1;