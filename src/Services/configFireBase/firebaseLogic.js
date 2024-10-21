import {
	createUserWithEmailAndPassword,
	sendPasswordResetEmail,
	signInWithEmailAndPassword,
	signOut,
} from 'firebase/auth';
import { auth } from './firebaseConfig';

export const signUp = async (email, password) => {
	try {
		const userCredential = await createUserWithEmailAndPassword(auth, email, password);
		return userCredential.user;
	} catch (error) {
		let errorMessage;

		switch (error.code) {
			case 'auth/email-already-in-use':
				errorMessage = 'Пользователь с таким email уже существует.';
				break;
			case 'auth/invalid-email':
				errorMessage = 'Некорректный email. Проверьте формат.';
				break;
			case 'auth/weak-password':
				errorMessage = 'Пароль слишком слабый. Используйте более сложный пароль.';
				break;
			case 'auth/operation-not-allowed':
				errorMessage = 'Регистрация с email временно недоступна.';
				break;
			default:
				errorMessage = 'Произошла ошибка при регистрации. Попробуйте снова.';
		}

		return { error: errorMessage };
	}
};

export const resetPassword = async email => {
	try {
		await sendPasswordResetEmail(auth, email);
		return { success: 'Письмо для сброса пароля отправлено на ваш email' };
	} catch (error) {
		let errorMessage;

		switch (error.code) {
			case 'auth/user-not-found':
				errorMessage = 'Пользователь с таким email не найден.';
				break;
			case 'auth/invalid-email':
				errorMessage = 'Некорректный email. Проверьте формат.';
				break;
			default:
				errorMessage = 'Произошла ошибка при сбросе пароля. Попробуйте снова.';
		}

		return { error: errorMessage };
	}
};

export const signIn = async (email, password) => {
	try {
		const userCredential = await signInWithEmailAndPassword(auth, email, password);
		const user = userCredential.user;
		console.log(user);
		return { user };
	} catch (error) {
		let errorMessage;

		switch (error.code) {
			case 'auth/user-not-found':
				errorMessage = 'Пользователь с таким email не найден.';
				break;
			case 'auth/wrong-password':
				errorMessage = 'Неверный пароль. Попробуйте еще раз.';
				break;
			case 'auth/invalid-email':
				errorMessage = 'Некорректный email. Проверьте формат.';
				break;
			case 'auth/user-disabled':
				errorMessage = 'Ваш аккаунт был отключен.';
				break;
			default:
				errorMessage = 'Произошла ошибка при входе. Попробуйте снова.';
		}

		console.error('Ошибка входа - ', errorMessage);
		return { error: errorMessage };
	}
};

export const logOut = async () => {
	try {
		await signOut(auth);
		console.log('пользователь вышел');
	} catch (error) {
		console.error('не получилось выйти -', error.message);
	}
};
