import {
    CNavItem,
    CSidebar,
    CSidebarNav,
} from "@coreui/react";
import * as PropTypes from "prop-types";
import '@coreui/coreui/dist/css/coreui.min.css'


function CIcon(props) {
    return null;
}

CIcon.propTypes = {
    customClassName: PropTypes.string,
    icon: PropTypes.any
};

function LeftNav(props) {
    return(
        <CSidebar>
            <CSidebarNav>
                <CNavItem href="/admin/contests"> 
                    <CIcon customClassName="nav-icon" icon={"cilSpeedometer"} />
                    Контесты
                </CNavItem>
                <CNavItem href="/admin/tasks"> 
                    <CIcon customClassName="nav-icon" icon={"cilSpeedometer"} />
                    Задачи
                </CNavItem>
                <CNavItem href="/admin/members"> 
                    <CIcon customClassName="nav-icon" icon={"cilSpeedometer"} />
                    Участники
                </CNavItem>
                <CNavItem href="/admin/statistics"> 
                    <CIcon customClassName="nav-icon" icon={"cilSpeedometer"} />
                    Отчетная статистика по проведенным олимпиадам
                </CNavItem>
            </CSidebarNav>
        </CSidebar>
    )
}

export default LeftNav;