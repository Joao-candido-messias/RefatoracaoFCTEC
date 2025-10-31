import './cardProjeto.css'

export default function CardProjeto(){
    return(
        <section className='projetos'>
            <div className='projeto'>
                <img
                    className='capa'
                    alt='Imagem de capa do post'
                    src='/assets/imagens/coresFogo.jpg'
                />
                <h2 className='titulo'>A quimica das cores</h2>
                <button>Ler</button>
            </div>
        </section>
       
    )
}