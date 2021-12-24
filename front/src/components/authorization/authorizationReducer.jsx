const ACTION_CHANGE_LOGIN = 'ACTION_CHANGE_LOGIN';
const ACTION_CHANGE_PASSWORD = 'ACTION_CHANGE_PASSWORD';
const ACTION_CHANGE_IS_REMEMBERED = 'ACTION_CHANGE_IS_REMEMBERED';
const ACTION_GET_ANSWER_FROM_SERVER = 'ACTION_GET_ANSWER_FROM_SERVER';

const initialState = {
	login: null,
	password: null,
	isRemembered: null,

	isAuthorized: false,
	userName: 'Даниил Скворцов'
}

export const changeLogin = (newLogin) => {
	return {
		type: ACTION_CHANGE_LOGIN,
		data: newLogin
	}
}

export const changePassword = (newPassword) => {
	return {
		type: ACTION_CHANGE_PASSWORD,
		data: newPassword
	}
}

export const changeIsRemembered = (newValue) => {
	return {
		type: ACTION_CHANGE_IS_REMEMBERED,
		data: newValue
	}
}

export const getAnswerFromServer = (answer) => {
	return {
		type: ACTION_GET_ANSWER_FROM_SERVER,
		data: answer
	}
}

function AuthorizationReducer(state = initialState, action) {
	switch(action.type) {
		case ACTION_CHANGE_LOGIN:
			return Object.assign({}, state, {login: action.data});
		case ACTION_CHANGE_PASSWORD:
			return Object.assign({}, state, {isAuthorized: true});
		case ACTION_CHANGE_IS_REMEMBERED:
			return Object.assign({}, state, {isRemembered: action.data});
		case ACTION_GET_ANSWER_FROM_SERVER:
			return Object.assign({}, state, {isAuthorized: action.data});
		default: 
			return state;
	}
}


export default AuthorizationReducer;