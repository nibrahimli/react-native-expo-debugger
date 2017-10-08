import store from '../store/store';

export const logIn = () => {
	const reduxStore = store.getState();
	const email = reduxStore.email;
	const password = reduxStore.password;

	if(email == 'admin' && password == 'react'){
		return true;
	}
	else {
		return false;
	}
}

export const logOut = () => false