
import './App.css';
import { InputProvider } from "./context/InputContext";
import Container from "./components/Container";
import {WeatherProvider} from './context/WeatherContext';

function App() {
  return (
    <div className="App">
     <InputProvider>
      <WeatherProvider>
      <Container/>
      </WeatherProvider>
     </InputProvider>
   
    </div>
  );
}

export default App;
