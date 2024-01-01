import logo from './logo.svg';
import './App.css';
import Main from './Component/Main';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const background='url("./Component/Images/balu.png")';
  return (
    <BrowserRouter>
    <div className="Body">
      <Main/>
    </div>
    </BrowserRouter>
  );
}

export default App;
