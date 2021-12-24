import {CButton, CCol, CContainer, CForm, CFormCheck, CFormInput, CFormLabel, CFormText, CRow} from "@coreui/react";
import { Route } from "react-router-dom";
import TasksList from "./TasksList.jsx";
import Task1 from './Task1.jsx';
import Task2 from './Task2.jsx';
import Task3 from './Task3.jsx';
import Task4 from "./Task4.jsx";
import Task1success from './Task1success';
import Task2success from './Task2success';
import Task3success from './Task3success';
import Task4success from './Task4success';

function Tasks() {
    return (
            <CContainer>
                <CRow className="justify-content-start">
                    <CCol xs={3}><TasksList /></CCol>
                    <CCol xs={6}>
                        <Route path='/contest/tasks/1' component={Task1}/>
                        <Route path='/contest/tasks/2' component={Task2}/>
                        <Route path='/contest/tasks/3' component={Task3}/>
                        <Route path='/contest/tasks/4' component={Task4} />
                        <Route path='/contest/contest/tasks/1/success' component={Task1success} />
                        <Route path='/contest/contest/tasks/2/success' component={Task2success} />
                        <Route path='/contest/contest/tasks/3/success' component={Task3success} />
                        <Route path='/contest/contest/tasks/4/success' component={Task4success} />

                    </CCol>
                </CRow>
            </CContainer>
    );
};

export default Tasks;