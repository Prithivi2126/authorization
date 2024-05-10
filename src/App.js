import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './component/Login';
import UnAuthorized from './component/UnAuthorized';
import Layout from './component/Layout';
import Auth from './component/Auth';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/unauthorized' element={<UnAuthorized />} />
          <Route element={<Auth />}>
            <Route path='/' element={<Layout />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
