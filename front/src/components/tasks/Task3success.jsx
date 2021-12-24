import { Route, NavLink } from "react-router-dom";
import {CButton, CCol, CContainer, CForm, CFormCheck, CFormInput, CFormLabel, CFormText, CRow} from "@coreui/react";


function Footer() {
    return (
        <CForm>

        <h1 style={{textAlign: "center"}}>А*Б</h1>

        <h4>
        Необходимо вывести произведение двух чисел
        </h4>

        
        <h3>
            Входные данные: Отсутствуют
        </h3>

        <h3>
        Выходные данные: Одна строка, произведение
        </h3>


        <h2>
            Исходный код:
        </h2>
        
        <div className="mb-3">
      
          <CFormInput type="text" id="inputPassword5" />

          <div>
                 
          </div>
          
          {/* <CButton color="primary">Отправить</CButton> */}
          <NavLink to="/contest/contest/tasks/3/success" className={`col btn btn-primary btn-lg`} isActive={() => {return true}}>Отправить</NavLink>


        </div>
      
        <h3>Ваша программа успешно прошла все тесты!</h3>

      </CForm>
    );
};

export default Footer;


