import './App.css';
import {NavLink, Route} from 'react-router-dom';
import Main from './components/main/main';
import Settings from './components/profiles/settings';
import AdminPanel from './components/admin_panel/AdminPanel.jsx';
import Authorization from './components/authorization/authorization';
import Registration from './components/registration/registration';
import RestorePassword from './components/restorePassword/restorePassword';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
        <div>
          <Route path='/' component={Main}/>
           
        </div>
  );
}

export default App;

