import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import PokemonSelect from './components/PokemonSelect';
import PokemonCard from './components/PokemonCard';
import PokemonAPI from './components/PokemonAPI';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
          <Route path='/' element={<PokemonAPI/>} />
          <Route path='/pokemon' element={<PokemonSelect/>} />
          <Route path='/pokemon/:id' element={<PokemonCard/>} />
        </Routes>
      </BrowserRouter>
      

    </div>
  );
}

export default App;
