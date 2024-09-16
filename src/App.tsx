import './App.css'
import Main from './components/Main/Main'
import { PrimeReactProvider } from 'primereact/api';

import 'primereact/resources/themes/lara-light-indigo/theme.css'; // Replace with your theme
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

function App() {
  return (
     <PrimeReactProvider>
        <Main />
     </PrimeReactProvider>
     )
  }

export default App
