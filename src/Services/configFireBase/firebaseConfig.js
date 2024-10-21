import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyBl4LfmECEDTYD_xkKl19lWrpUz2odcGks',
	authDomain: 'sosed-945c4.firebaseapp.com',
	projectId: 'sosed-945c4',
	storageBucket: 'sosed-945c4.appspot.com',
	messagingSenderId: '300348738009',
	appId: '1:300348738009:web:3c6c2fdee1374236e6f1c8',
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
// const db = getFirestore(firebaseApp); // For Using Database

export { auth };
