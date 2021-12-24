import Header from "../Header";
import {NavLink, Route, Redirect} from 'react-router-dom';
import Settings from '../../components/profiles/settings';
import AdminPanel from '../../components/admin_panel/AdminPanel.jsx';
import Authorization from '../../components/authorization/authorization';
import Registration from '../../components/registration/registration';
// import RestorePassword from '../../components/restorePassword/restorePassword';
import Tasks from '../tasks/tasks.jsx';
import Footer from '../../components/Footer.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';


function main() {
    return (
        <div>
            <Header/> 
            
            {/* <Route path="/profiles/settings" component={Settings}/> */}
            <Route path="/admin" component={AdminPanel}/>
            <Route path="/authorization" component={Authorization}/>
            <Route path='/registration' component={Registration}/>
            {/* <Route path='/restorePassword' component={RestorePassword}/> */}
            <Route path='/contest' component={Tasks}/>
            <Route exact path='/'> 
                <Redirect to='/authorization' />
            </Route>

            <Footer/>
        </div>
    );
}



export default main;