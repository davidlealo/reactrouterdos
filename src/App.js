import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      </BrowserRouter>
      

    </div>
  );
}

export default App;
