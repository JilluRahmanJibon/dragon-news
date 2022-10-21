import React, { createContext, useEffect, useState } from "react";
import {
	createUserWithEmailAndPassword,
	getAuth,
	GoogleAuthProvider,
	onAuthStateChanged,
	sendEmailVerification,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";
export const AuthContext = createContext();
const auth = getAuth(app);
const UserContexet = ({ children }) => {
	const [loading, setLoading] = useState(true);
	const [user, setUser] = useState({});
	const userSignOut = () => {
		setLoading(true);
		return signOut(auth)
			.then(result => {
				const user = result.user;
				console.log(user);
			})
			.catch(error => {
				console.error("user Sign out ", error);
			});
	};
	const googleProvider = new GoogleAuthProvider();
	const logInWithEmailAndPass = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};
	const signInGoogle = () => {
		setLoading(true);
		return signInWithPopup(auth, googleProvider)
			.then(result => {
				const user = result.user;
				console.log(user);
			})
			.catch(error => {
				console.error("error: ", error);
			});
	};
	const userCreateEmailAndPass = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};
	const updateUserProfile = (name, photoURL) => {
		updateProfile(auth.currentUser, {
			displayName: name,
			photoURL: photoURL,
		});
	};
	const userEmailVarify = () => {
		return sendEmailVerification(auth.currentUser);
	};
	useEffect(() => {
		const unSubscribe = onAuthStateChanged(auth, currentUser => {
			if (currentUser === null || currentUser.emailVerified) {
				setUser(currentUser);
			}
			setLoading(false);
		});
		return () => {
			unSubscribe();
		};
	}, []);
	const AuthInfo = {
		signInGoogle,
		userCreateEmailAndPass,
		user,
		loading,
		userSignOut,
		updateUserProfile,
		logInWithEmailAndPass,
		userEmailVarify,
	};
	return (
		<AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
	);
};

export default UserContexet;
