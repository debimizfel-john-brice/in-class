import './App.css';
import About from './Components/About/About';
import Cars from './Components/Cars/Cars';


function App() {
  return (
    <div className='App'>
      <h1>Hello world</h1>
      <p>Paragraph from App</p>
      <hr />
      <div className='content'>
        <About></About>
        <Cars></Cars>
      </div>
    </div>
  );
}

export default App;
