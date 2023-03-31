import Cabecalho from './components/cabecalho';
import Container from './components/container';
import Rodape from './components/rodape';
import Titulo from './components/titulo';


const App = () => {
    return (
        <>
            <Cabecalho />
            <Container>
                <Titulo>Área Administrativa</Titulo>
            </Container>
            <Rodape />
        </>
    );
};

export default App;
