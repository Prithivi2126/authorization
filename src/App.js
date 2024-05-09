import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './component/Login';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='/login' element={<Login />}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;