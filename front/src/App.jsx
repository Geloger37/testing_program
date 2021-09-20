import './App.css';
import {NavLink, Route} from 'react-router-dom';
import Settings from './components/profiles/settings';
import AdminPanel from './components/adminPanel/AdminPanel.jsx';
import Authorization from './components/authorization/authorization';
import Registration from './components/registration/registration';
import RestorePassword from './components/restorePassword/restorePassword';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
        <div>
          {/*<Route path='/' component={Main}/>*/}
          <Route path="/profiles/settings" component={Settings}/>
          <Route exact path="/admin" component={AdminPanel}/>
          <Route path="/authorization" component={Authorization}/>
          <Route path='/registration' component={Registration}/>
          <Route path='/restorePassword' component={RestorePassword}/> 
          
        </div>
  );
}

export default App;

