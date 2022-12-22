import { BrowserRouter, Routes, Route } from "react-router-dom";
import PagHome from "../paginas/home/PagHome";
import PagCalculadora from "../paginas/calculadora/PagCalculadora";
import PagCofre from "../paginas/cofre/PagCofre";

const RoutesApp = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<PagHome/>}/>
                <Route path='/PagCalculadora' element={<PagCalculadora/>}/>
                <Route path='/PagCofre' element={<PagCofre/>}/>
            </Routes>
        </BrowserRouter>
    )
}


export default RoutesApp;