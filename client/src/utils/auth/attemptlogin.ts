async function attemptlogin( username: string, password: string ): Promise<boolean> {
	console.log( 'Attempting to login with username: ' + username + ' and password: ' + password );
	return true;
}

export default attemptlogin;
