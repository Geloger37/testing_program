import axios from "axios";
import { push } from "connected-react-router";
import { unsuccessfulRequest } from "../registrationReducer.jsx";

export const sendRequest = (event) => {
    event.preventDefault();
    return (dispatch, getState) => {
        axios.post('http://localhost:9000/test.php', {
            email: getState().registration.email,
            password: getState().registration.password,
            firstName: getState().registration.firstName,
            secondName: getState().registration.secondName,
            group: getState().registration.group
        })
        .then(res => {
            if(res.data) {
                dispatch(push('/work'));
            } else {
                dispatch(unsuccessfulRequest(false));
            }
        })
        .catch(err => {
            throw err;
        })
    }
}
