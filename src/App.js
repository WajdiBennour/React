import Header from './Components/NavBar';
import './Index.css';
import EmployeesPage from './Pages/EmployeesPage';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
return (
  <Header>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<EmployeesPage/>}></Route>
      </Routes>
    </BrowserRouter>
  </Header>
  );
}

export default App;
