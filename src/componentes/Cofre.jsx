import { useState } from "react";
import Display from "./Display";
import Tecla from "./Tecla";
import '../css/Cofre.css'

const Cofre = () =>{
    var [num, setNum] = useState('');
    var [result, setResult] = useState('');

    function inserirNumeroDisplay(e){
        var numero = e.target.value;
        setNum(num + numero)
        setResult('')

        if(num.length === 4){
            setNum('')
        }

        console.log(numero)
    }

    function abrirCofre (){
        if(num === "1234"){
            setResult('Correto')
        }
        else{
            setResult('Error')
        }
        console.log('abrirCofre bombando')
        
    }

    function limpar(){
        setNum('')
        setResult('')
    }

    return(
        <>
            <section className="Cofre">
                <div className="layoutCofre">
                    <div className="portaCofre">
                        <Display className={"resultadoCofre"} textoDisplay={result}/>
                        <div className="tecladoCofre">
                            <Display className={"displayCofre"} textoDisplay={num}/>
                            <table>
                                <tbody>
                                    <tr>
                                        {[7,8,9].map((numero, index) => 
                                        <td key={index}><Tecla className={"botaoCofre"} onClick={inserirNumeroDisplay} valor={numero} textoTecla={numero}/></td>
                                        )}
                                        </tr>
                                        <tr>
                                        {[4,5,6].map((numero, index) => 
                                        <td key={index}><Tecla className={"botaoCofre"} onClick={inserirNumeroDisplay} valor={numero} textoTecla={numero}/></td>
                                        )}
                                        </tr>
                                        <tr>
                                        {[1,2,3].map((numero, index) => 
                                        <td key={index}><Tecla className={"botaoCofre"} onClick={inserirNumeroDisplay} valor={numero} textoTecla={numero}/></td>
                                            )}
                                        </tr>
                                        <tr>
                                            <td><Tecla className={"botaoCofre"} onClick={limpar} textoTecla={"C"}/></td>
                                            <td><Tecla className={"botaoCofre"} valor={0} onClick={inserirNumeroDisplay} textoTecla={0}/></td>
                                            <td><Tecla className={"botaoCofre"} onClick={abrirCofre} textoTecla={"Enter"}/></td>
                                        </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>   
        </>
    )
}

export default Cofre;