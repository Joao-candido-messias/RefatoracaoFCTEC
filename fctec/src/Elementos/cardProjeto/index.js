import './cardProjeto.css'

export default function CardProjeto({nome}){
    return(
            <div className='projeto'>
                <img
                    className='capa'
                    alt='Imagem de capa do post'
                    src={`/assets/imagens/Projetos/${nome}.jpg`}
                />
                <h2 className='titulo'></h2>

            </div>  
    )
}