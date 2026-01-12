import './projetos.css'
import CardProjeto from '../cardProjeto'

export default function Projetos(){
    return(
        <>
            <h1 className="tituloPaginaInicial">Confira aqui nossos projetos</h1>
            <div className='projetos'>   
                <CardProjeto nome="AQuimicaDasCores"/>
                <CardProjeto/>
                <CardProjeto/>
                <CardProjeto/>
            </div>
        </>
        
    )
}