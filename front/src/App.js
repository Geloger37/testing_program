import './App.css';
import {Route} from 'react-router-dom';
import settings from './components/profiles/settings';
import Header from './components/Header';

function App() {
  return (
        <div>

        <Header />    

        <Route path="/profiles/settings" component={settings}/>

        </div>
  );
}

export default App;
