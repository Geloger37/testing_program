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
                <CNavItem href="/admin/"> {/*TODO: отключить перезагрузку*/}
                    <CIcon customClassName="nav-icon" icon={"cilSpeedometer"} />
                    Статистика
                </CNavItem>
                <CNavItem href="./tasks"> {/*TODO: страница изменения заданий*/}
                    <CIcon customClassName="nav-icon" icon={"cilSpeedometer"} />
                    Задания
                </CNavItem>
            </CSidebarNav>
        </CSidebar>
    )
}

export default LeftNav;