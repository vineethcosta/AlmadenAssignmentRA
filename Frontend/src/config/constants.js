// This is the config used in order to send
// our token with Axios requests
export const config = {
	headers: {
		Authorization: "Bearer " + localStorage.getItem("jwt"),
	},
};

/**
 * EndPoints of the API used in the code
 */

// // Login Screen
// export const LOGIN_URL = `http:///signin`;

// //google login screen
// export const GOOGLE_LOGIN_URL = `http://localhost:5000/googleLogin`;

// // SignUp Screen
// export const SIGNUP_URL = `http://localhost:5000/signup`;
