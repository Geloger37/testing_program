import './App.css';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import settings from './components/profiles/settings';

function App() {
  return (
  <BrowserRouter>
      <Switch>
        <Route path="/profiles/settings" component={settings}/>
      </Switch>
  </BrowserRouter>
  );
}

export default App;
