import React from "react";
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from "react-router-dom"

import Pagina1 from "./Paginas/Pagina1";
import Pagina2 from "./Paginas/Pagina2";
import Pagina3 from "./Paginas/Pagina3";

function Caminhos(){
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" Component={Pagina1}/>
                    <Route path="/Pagina2" Component={Pagina2}/>
                    <Route path="/Pagina3" Component={Pagina3}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default Caminhos;