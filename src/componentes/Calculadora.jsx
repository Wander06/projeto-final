import { useState } from "react";
import Display from "./Display";
import Tecla from "./Tecla";
import imageBarra from '../img/barra-navegacao.jpg'
import '../css/Calculadora.css';



const Calculadora = () =>{
    var [ num, setNum] = useState('')
    var [ oldNum, setOldNum ] = useState('')
    var [ope, setOpe] = useState()
    

    function inserirNumeroDisplay(e){
        var numero = e.target.value
        setNum(num + numero)
    }

    function inserirOperacoesDisplay(e){
        var operador = e.target.value
        setOpe(operador)
        setOldNum(num)
        setNum('')
    }

    function trocaSinal(){
        if(num > 0){
            setNum(-num)
        }
        if(num < 0){
            setNum(num * -1)
        }
    }

    function calcularResultado (){
        if(ope === "X"){
            num = Number(oldNum) * Number(num);
        }
        if(ope === "+"){
            num = Number(oldNum) + Number(num);
        }
        if(ope === "÷"){
            num = Number(oldNum) / Number(num);
        }
        if(ope === "-"){
            num = Number(oldNum) - Number(num);
        }
        if(ope === "ˆ"){
            num = Math.pow(Number(oldNum), Number(num));
        }
        if(ope === "%"){
            num = (Number(num) * Number(oldNum)) / 100; 
        }
        
        setNum(num)
    }

    function limpar(){
        setNum('')
    }

    return( 
        <>
            <section className='calculadora'>
                <div className="layoutCelular">
                    <div className="telaCelular">
                        <div className="camera">
                            <div className="olhoDaCamera"></div>
                        </div>
                        <Display className={"displayCalculadora"} textoDisplay={num}/>
                        <table>
                            <tbody>
                                <tr>
                                    <td><Tecla className={'botao'} onClick={limpar} textoTecla={'C'}/></td>
                                        {['ˆ','%',].map((numero, index) => (
                                            <td key={index}>
                                                <Tecla className={'botao'} onClick={inserirOperacoesDisplay} textoTecla={numero} valor={numero}/>
                                            </td>  
                                        ))}
                                    <td><Tecla className={'botao'} onClick={inserirOperacoesDisplay} textoTecla={'÷'} valor={'÷'}/></td>
                                </tr>
                                <tr>
                                    {[7,8,9].map((numero, index) => (
                                        <td key={index}>
                                            <Tecla className={'botao'} onClick={inserirNumeroDisplay} textoTecla={numero} valor={numero}/>
                                        </td>  
                                    ))}
                                    <td><Tecla className={'botao'} onClick={inserirOperacoesDisplay} textoTecla={'X'} valor={'X'}/></td>
                                </tr>
                                <tr>
                                    {[4,5,6].map((numero, index) => (
                                        <td key={index}>
                                            <Tecla className={'botao'} onClick={inserirNumeroDisplay} textoTecla={numero} valor={numero}/>
                                        </td>  
                                    ))}
                                    <td><Tecla className={'botao'} onClick={inserirOperacoesDisplay} textoTecla={'-'} valor={'-'}/></td>
                                </tr>
                                <tr>
                                    {[1,2,3].map((numero, index) => (
                                        <td key={index}>
                                            <Tecla className={'botao'} onClick={inserirNumeroDisplay} textoTecla={numero} valor={numero}/>
                                        </td>  
                                    ))}
                                    <td><Tecla className={'botao'} onClick={inserirOperacoesDisplay} textoTecla={'+'} valor={'+'}/></td>
                                </tr>
                                <tr>
                                    <td> <Tecla className={'botao'} onClick={trocaSinal} textoTecla={'+/-'} valor={'+/-'}/></td>
                                    {[0,'.'].map((numero, index) => (
                                    <td key={index}>
                                        <Tecla className={'botao'} onClick={inserirNumeroDisplay} textoTecla={numero} valor={numero}/>
                                    </td>  
                                    ))}
                                    <td>
                                        <Tecla className={'botao'} onClick={calcularResultado} textoTecla={'='}/>
                                    </td>
                                </tr>
                            </tbody>
                        </table>  
                        <img id='barraNavegacao' src={imageBarra} alt="barra de navegação" />
                    </div> 
                </div>
            </section>
        </>
    )
}

export default Calculadora;





