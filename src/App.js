import './App.css';
import Employee from './Components/Employee';

function App() {
  console.log('We will show employees');
  const show = false;
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <Employee />
          <Employee />
          <Employee />
          <Employee />
          <Employee />
          <Employee />
        </p>
      </header>
    </div>
  );
}

export default App;
