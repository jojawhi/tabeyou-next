import { auth, database } from './firebaseConfig';

import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
	User,
	UserCredential,
} from 'firebase/auth';

import { collection, doc, setDoc } from 'firebase/firestore';

export let user: User;

export const createNewEmailUser = async (email: string, password: string) => {
	if (!email || !password) {
		return;
	}

	await createUserWithEmailAndPassword(auth, email, password)
		.then(userCredential => {
			user = userCredential.user;
		})
		.catch(error => {
			const errorCode = error.code;
			const errorMessage = error.message;
			console.log('Create User Error:', errorCode, errorMessage);
		});
};

export const signInExistingUser = async (email: string, password: string) => {
	if (!email || !password) {
		return;
	}

	return await signInWithEmailAndPassword(auth, email, password).then(userCredential => {
		console.log(userCredential.user);
		return userCredential;
	});
};

export const addNewAuthUserToDB = async (uid: string, email: string) => {
	const usersRef = collection(database, 'users');

	await setDoc(doc(usersRef, uid), {
		email,
		settings: {
			darkMode: true,
		},
	})
		.then(() => {
			console.log(`User ${uid} added to database`);
		})
		.catch(error => {
			const errorCode = error.code;
			const errorMessage = error.message;
			console.log('Create User Error:', errorCode, errorMessage);
		});
};

export const signOutUser = () => {
	signOut(auth);
};

// export const sendEmailVerification = async (email: string) => {}
