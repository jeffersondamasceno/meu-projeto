import './App.css';

function App() {
  const name = 'Jefferson'
  const newName = name.toUpperCase()
  
  function sum(a, b) {
    return a + b
  }

  const url = 'https://placehold.co/300x200/blue/yellow'

  return (
    <div className="App">
      <h2>Alterando o JSX</h2>
      <p>Olá, {newName}</p>
      <p>Soma: {sum(1, 1)}</p>
      <img src={url} alt="Minha Imagem"></img>
    </div>
  );
}

export default App;
