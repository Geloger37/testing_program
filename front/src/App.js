import './App.css';
import {Route} from 'react-router-dom';
import Navigation from './components/Navigation';
import settings from './components/profiles/settings';

function App() {
  return (
    <div>

      <Navigation/>

      <Route path="/profiles/settings" component={settings}/>


    </div>
  );
}

export default App;
