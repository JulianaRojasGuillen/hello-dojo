import logo from './logo.svg';
import './App.css';

import Lista from './componentes/Lista';

function App() {

  return (
    <div className="App">
      <h1>
        Hello Dojo!
      </h1>
      <h2>
        Things I need to do:
      </h2>
       <Lista></Lista>
    </div>
  );
}

export default App;
