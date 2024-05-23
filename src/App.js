import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {
  
  const nome = "Maria"
  return (
    <div className="App">
      <h1>Testando CSS</h1>
      <SayMyName nome="Jefferson"/>
      <SayMyName nome="Matheus"/>
      <SayMyName nome={nome}/>
      <Pessoa 
      nome="Rodrigo" 
      idade="28" 
      profissao="Programador" 
      foto="https://placehold.co/150x150"/>
    </div>
  );
}

export default App;
