import React, { useContext, useEffect, useRef, useState } from "react";
import {
	BoldLink,
	BoxContainer,
	FormContainer,
	Input,
	MutedLink,
	SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import { UserContext } from "../../App";
import axios from "axios";
import { SIGNUP_URL } from "../../config/constants";

import { useHistory } from "react-router-dom";

export function SignupForm(props) {
	const { switchToSignin } = useContext(AccountContext);
	const { state, dispatch } = useContext(UserContext);
	const history = useHistory();
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");
	const [formatValidation, setFormatValidation] = useState(false);
	const [authValidation, setAuthValidation] = useState(false);
	const [confirmValidation, setConfirmValidation] = useState(false);

	const timerRef = useRef();

	useEffect(
		() => () => {
			clearTimeout(timerRef.current);
		},
		[]
	);

	const PostData = () => {
		// the Regex email validation was token from : https://emailregex.com/
		// Here we check just if the given email has a correct format
		if (
			/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
				email
			)
		) {
			axios.post('/signup', {
				name,
				password,
				email,
			})
				.then((res) => {
					const data = res.data;

					if (data.error) {
						window.alert(data.error);
						setFormatValidation(false);
						setAuthValidation(true);
					} else {
						// show the confirmation message
						console.log("going to login")
						setConfirmValidation(true);
						{ switchToSignin() }
						// set a time before we redirect the user to login page

					}
				})
				.catch((err) => {
					window.alert(err);

				});
		} else {
			window.alert("Invalid input");
			setAuthValidation(false);
			setFormatValidation(true);
		}
	};
	return (!state &&
		<BoxContainer>
			<FormContainer>
				<Input type="text" placeholder="Full Name" onChange={(e) => setName(e.target.value)} />
				<Input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
				<Input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />

			</FormContainer>
			<Marginer direction="vertical" margin={10} />
			<SubmitButton type="submit" onClick={() => PostData()}>Signup</SubmitButton>
			<Marginer direction="vertical" margin="1em" />
			<MutedLink href="#">
				Already have an account?
        <BoldLink href="#" onClick={switchToSignin}>
					Signin
        </BoldLink>
			</MutedLink>
		</BoxContainer>
	);
}
