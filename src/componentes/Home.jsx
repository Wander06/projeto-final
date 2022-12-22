import '../css/Home.css'
import FotoBia from '../img/Bia <3.jpeg'

const Home = () =>{
    return(
        <>
            <h1 className="titulo">Seja Bem-vindo!!</h1>
            <h2>#Biamichelle</h2>
            <h2>#DiscipulosDeBiamichelle</h2>
            <p>"Em memoria de Biamichelle..."</p>
            <img src={FotoBia} alt="Foto de biamichelle" />
            <footer id='rodape'>By Wander</footer>
        </>
    )
}

export default Home;