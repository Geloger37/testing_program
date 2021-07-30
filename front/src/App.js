import './App.css';
import {Route} from 'react-router-dom';
import settings from './components/profiles/settings';
import Header from './components/Header';
import AdminPanel from './components/admin_panel/AdminPanel.jsx';



function App() {
  return (
        <div>
            <Header />

            <Route path="/profiles/settings" component={settings}/>
            <Route exact path="/admin" component={AdminPanel}/>

        </div>
  );
}

export default App;

