import React, {useContext, useEffect} from 'react';
import { Redirect } from 'react-router-dom';
import UserContext from '../UserContext';

export default function Logout(){

	const { setUser } = useContext(UserContext);

	useEffect(()=> {

		localStorage.clear();

		setUser({
			id: null,
			isAdmin: null
		});

	});

	return(
		<Redirect to={{pathname: '/login', state: { from: 'logout'}}}/>
	);
}
