import './App.css';
import Index from "./components";
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'


// optional configuration
const options = {
  // you can also just use 'bottom center'
  position: positions.MIDDLE,
  timeout: 5000,
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.SCALE
}
function App() {
  return (
      <AlertProvider template={AlertTemplate} {...options}>
      <Index/>
      </AlertProvider>
  );
}

export default App;
