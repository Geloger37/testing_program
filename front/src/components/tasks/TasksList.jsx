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

function TasksList(props) {
    return(
        <CSidebar>
            <CSidebarNav>
                <CNavItem href="/contest/tasks/1"> 
                    <CIcon customClassName="nav-icon" icon={"cilSpeedometer"} />
                    Задача 1. Hello, world!
                </CNavItem>
                <CNavItem href="/contest/tasks/2"> 
                    <CIcon customClassName="nav-icon" icon={"cilSpeedometer"} />
                    Задача 2. А+Б
                </CNavItem>
                <CNavItem href="/contest/tasks/3"> 
                    <CIcon customClassName="nav-icon" icon={"cilSpeedometer"} />
                    Задача 3. А*Б
                </CNavItem>
                <CNavItem href="/contest/tasks/4"> 
                    <CIcon customClassName="nav-icon" icon={"cilSpeedometer"} />
                    Задача 4. А/Б
                </CNavItem>
            </CSidebarNav>
        </CSidebar>
    )
}

export default TasksList;