import { auth, database } from './firebaseConfig';

import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	onAuthStateChanged,
	User,
} from 'firebase/auth';

import { doc, setDoc } from 'firebase/firestore';

export let user: User;

export const createNewEmailUser = async (email: string, password: string) => {
	if (!email || !password) {
		return;
	}

	await createUserWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			user = userCredential.user;
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			console.log('Create User Error:', errorCode, errorMessage);
		});
};

export const signInExistingUser = async (email: string, password: string) => {};

export const addNewAuthUserToDB = async (uid: string) => {};
