import Cabecalho from './components/cabecalho';
import Container from './components/container';
import Titulo from './components/titulo';


const App = () => {
    return (
        <>
            <Cabecalho />
            <Container>
                <Titulo>Área Administrativa</Titulo>
            </Container>
        </>
    );
};

export default App;
