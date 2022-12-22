const Tecla = (props) =>{
    return (
            
            <button className={props.className} onClick={props.onClick} value={props.valor} >{props.textoTecla}</button>
            
    )
}

export default Tecla;