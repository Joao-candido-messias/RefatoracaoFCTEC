import './paragrafoComTitulo.css'

export default function ParagrafoComTitulo({titulo, texto}){
    return(
        <>
            <h2 className='tituloParagrafo'>{titulo}</h2>
            <p className='texto'>{texto}</p>
        </>
    )
}