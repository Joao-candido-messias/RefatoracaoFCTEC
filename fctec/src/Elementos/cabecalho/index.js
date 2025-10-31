import '../cabecalho/cabecalho.css'
import { useNavigate } from 'react-router-dom'

export default function Cabecalho(){
    const navigate = useNavigate();
    return(
        <div className='cabecalho'>
            <img className='foto_cabecalho'src="/assets/imagens/Logo Horizontal - Branca.svg" alt="Logo BioDelivery" onClick={() => navigate('/')} />
        </div>
    )   
}
