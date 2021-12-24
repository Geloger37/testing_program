import { connect } from 'react-redux';
// import { changeLogin, changePassword, changeIsRemembered } from './authorizationReducer.jsx';
// import { sendRequest } from './authorizationRequest.jsx';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import css from './authorization.module.css';

function authorization() {
    return (
        <div className={`d-flex align-items-center ${css.wrapper}`}>
			<form className={`container ${css.inputForm}`}>
				<div className={`form-group ${css.formGroup}`}>
					<label htmlFor="inputEmail">Электронная почта</label>
					<input type="email" className="form-control" id="inputEmail" 
						   aria-describedby="emailHelp" placeholder="Ваша электронная почта" required
						   minlength="1" maxlength="50"
					/>
				</div>
				
				<div className={`form-group ${css.formGroup}`}>
					<label htmlFor="inputPassword">Пароль</label>
					<input type="password" className="form-control" id ="inputPassword" 
						   aria-describedby="passwordHelp" placeholder="Ваш пароль" required
						   minlength="1" maxlength="50"
					/>
				</div>
				
				<div className={`row ${css.buttons}`}>
					{/*<button type="submit" className={`btn btn-primary btn-lg col ${css.btn}`}>Авторизоваться</button> //TODO: вернуть на место*/}
					<NavLink to="/contest" className={`col btn btn-primary btn-lg ${css.btn}`} isActive={() => {return true}}>Авторизоваться</NavLink>
					<NavLink to="/registration" className={`col btn btn-secondary btn-lg ${css.btn}`} isActive={() => {return true}}>Зарегистрироваться</NavLink>
				</div>
				{/* <NavLink to="/restorePassword">Забыли пароль?</NavLink>	 */}
			</form>
		</div>
    );
}

const mapStateToProps = (state) => {
	let s = state.authorization;
	return {
		login: s.login,
		password: s.password,
		isRemembered: s.isRemembered
	}
}

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		changeLogin: (e) => dispatch(changeLogin(e.target.value)),
// 		changePassword: (e) => dispatch(changePassword(e.target.value)),
// 		changeIsRemembered: (e) => dispatch(changeIsRemembered(e.target.value)),
// 		sendRequest : (e) => dispatch(sendRequest(e))
// 	}
// }

// export default connect(mapStateToProps, mapDispatchToProps) (authorization);
export default connect(mapStateToProps) (authorization);