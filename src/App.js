import logo from './logo.svg';
import './App.css';
import Login from './LoginForm/Login';
import { Route, Routes } from 'react-router-dom';
import Register from './LoginForm/Register';

function App() {
  return (
    <div>

      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
