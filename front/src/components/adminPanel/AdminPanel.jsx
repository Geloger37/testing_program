import {CButton, CCol, CContainer, CForm, CFormCheck, CFormInput, CFormLabel, CFormText, CRow} from "@coreui/react";
import LeftNav from "./LeftNav";
import Header from "../Header";

function AdminPanel() {
    return (
        <div>
            <Header /> {/*TODO: посмотреть, откуда компонента */}
            <CContainer>
                <CRow className="align-items-start">
                    <CCol><LeftNav /></CCol>
                    <CCol>faf</CCol>
                </CRow>
            </CContainer>
        </div>
    );
}

export default AdminPanel;