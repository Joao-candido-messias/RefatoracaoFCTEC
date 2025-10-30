import './inicial.css'
import Cabecalho from '../../Elementos/cabecalho'
import Rodape from '../../Elementos/rodape'
import ParagrafoComTitulo from '../../Elementos/paragrafoComTitulo'

export default function  PaginaInicial(){
    return( 
        <>
            <Cabecalho/>
                <main>
                    <ParagrafoComTitulo titulo={"FCTEC 2024"} texto={<>A Feira de Ciências e Tecnologia do Instituto Federal Farroupilha — <i>Campus</i> Júlio de Castilhos foi um verdadeiro sucesso. Pioneira no campus, marcou a realização da primeira edição do evento, que ampliou o conhecimento dos participantes por meio de experiências práticas e interativas. Além de integrar áreas como física, química, biologia e tecnologia, a feira premiou o esforço de alunos e professores e serviu como atividade extracurricular para os estudantes do terceiro ano do curso técnico em Informática do campus.</>}/>
                    
                    <h1>Colocar aqui um carrosel com as fotos da feira</h1>

                    <h2 className='titulo'>Confira aqui nossos projetos</h2>
                    {/* desonvolver um elemento de projeto e fazer com que cada um deles apareça a partir de uma lista. */}
                </main>
            <Rodape/>
        </>
    )
}