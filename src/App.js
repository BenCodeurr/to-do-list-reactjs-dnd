import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './pages/login/Login';
import './pages/signup/SignUp';
import './pages/todoui/Todo'
import SignUp from './pages/signup/SignUp';
import Login from './pages/login/Login';
import Todo from './pages/todoui/Todo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<SignUp/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/todo' element={<Todo/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
