import {CButton, CCol, CContainer, CForm, CFormCheck, CFormInput, CFormLabel, CFormText, CRow} from "@coreui/react";
import { Route } from "react-router-dom";
import LeftNav from "./LeftNav.jsx";
import TasksTable from './TasksTable.jsx';
import MembersTable from './MembersTable.jsx';
import ContestsTable from './ContestsTable.jsx';
import StatisticsTable from "./StaticticsTable.jsx";

function AdminPanel() {
    return (
        <div>
            
            <CContainer>
                <CRow className="justify-content-start">
                    <CCol xs={3}><LeftNav /></CCol>
                    <CCol xs={9}>
                        <Route path='/admin/tasks' component={TasksTable}/>
                        <Route path='/admin/members' component={MembersTable}/>
                        <Route path='/admin/contests' component={ContestsTable}/>
                        <Route path='/admin/statistics' component={StatisticsTable} />

                    </CCol>
                </CRow>
            </CContainer>
        </div>
    );
}

export default AdminPanel;