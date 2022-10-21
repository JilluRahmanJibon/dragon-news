import React, { createContext, useEffect, useState } from "react";
import {
	createUserWithEmailAndPassword,
	getAuth,
	GoogleAuthProvider,
	onAuthStateChanged,
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
		return signInWithEmailAndPassword(auth, email, password);
	};
	const signInGoogle = () => {
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
		return createUserWithEmailAndPassword(auth, email, password);
	};
	const updateUserProfile = name => {
		updateProfile(auth.currentUser, {
			displayName: name,
		});
	};
	useEffect(() => {
		const unSubscribe = onAuthStateChanged(auth, currentUser => {
			setUser(currentUser);
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
	};
	return (
		<AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
	);
};

export default UserContexet;
