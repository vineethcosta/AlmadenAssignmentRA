import React, { useContext, useState } from "react";

import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../../App";
import {
	BoldLink,
	BoxContainer,
	FormContainer,
	Input,
	MutedLink,
	SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { LOGIN_URL, GOOGLE_LOGIN_URL } from "../../config/constants";
import { GoogleLogin } from 'react-google-login';
import axios from "axios";
import { AccountContext } from "./accountContext";

export function LoginForm(props) {
	const { switchToSignup } = useContext(AccountContext);
	const { state, dispatch } = useContext(UserContext);
	const history = useHistory();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [formatValidation, setFormatValidation] = useState(false);
	const [authValidation, setAuthValidation] = useState(false);
	const PostData = () => {
		// the Regex email validation was token from : https://emailregex.com/
		if (
			/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
				email
			)
		) {
			axios.post('/signin', { password, email })
				.then((res) => {
					const data = res.data;
					if (data.error) {
						window.alert(data.error);
						setFormatValidation(false);
						setAuthValidation(true);
					} else {
						// we store our generated token in order to use it to access protected endpoints
						localStorage.setItem("jwt", data.token);
						// we also store the user details
						localStorage.setItem("user", JSON.stringify(data.user));
						dispatch({ type: "USER", payload: data.user });
						//we can show that success PopUp or not depends on dev choice
						//
						// we redirect the user to home page
						history.push("/");
					}
				})
				.catch((err) => {
					console.log(err);
				});
		} else {
			window.alert("Invald Input");
			setAuthValidation(false);
			setFormatValidation(true);
		}
	};

	const handleGoogleLoginFailed = async (googleData) => {
		console.log(googleData.error)
		window.alert(googleData.error)
	}
	
	const handleGoogleLogin = async (googleData) => {
		const tokenId = googleData.tokenId
		const userId = googleData.profileObj.givenName
		const emailId = googleData.profileObj.email
		console.log(googleData)
		await axios.post('/googleLogin', {
			tokenId, userId, emailId
		})
			.then((res) => {
				const data = res.data;
				if (data.error) {
					console.log(data.error)
				} else {
					// we store our generated token in order to use it to access protected endpoints
					localStorage.setItem("jwt", data.jwtToken);
					// we also store the user details
					localStorage.setItem("user", JSON.stringify(userId));
					dispatch({ type: "USER", payload: userId });
					//we can show that success PopUp or not depends on dev choice
					//
					// we redirect the user to home page
					history.push("/");
				}
			})
			.catch((err) => {
				console.log(err);
			});
	}

	return (!state &&
		<BoxContainer>
			<FormContainer>
				<Input type="email" placeholder="Email" onChange={(e) => {
					setEmail(e.target.value);
				}} />
				<Input type="password" placeholder="Password" onChange={(e) => {
					setPassword(e.target.value);
				}} />
			</FormContainer>
			<Marginer direction="vertical" margin={10} />
			<Marginer direction="vertical" margin="1.6em" />
			<SubmitButton type="submit" onClick={() => PostData()}>Signin</SubmitButton>
			<GoogleLogin style={{ paddingLeft: 30 }}
				clientId="583670879500-hf68cropiqce4qfjans5bi5rd77qebie.apps.googleusercontent.com" //Client Id for Google AUth
				onSuccess={handleGoogleLogin}
				onFailure={handleGoogleLoginFailed}
				cookiePolicy={'single_host_origin'}
			/>
			<Marginer direction="vertical" margin="1em" />
			<MutedLink href="#">
				Don't have an account?{" "}
				<BoldLink href="#" onClick={switchToSignup}>
					Signup
        </BoldLink>
			</MutedLink>
		</BoxContainer>
	);
}
