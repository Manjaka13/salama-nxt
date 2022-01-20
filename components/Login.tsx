import React from "react";
import { v4 as uuidv4 } from "uuid";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faHandshake } from "@fortawesome/free-solid-svg-icons";
import {
	faFacebook,
	faLinkedin,
	faGithub
} from "@fortawesome/free-brands-svg-icons";
import { SOCIAL } from "helpers/const";
import Button from "components/core/Button";

library.add(
	faHandshake,
	faFacebook,
	faLinkedin,
	faGithub
);

const Login = (): JSX.Element => {
	const mappedSocial = SOCIAL.map(social => (
		<a
			className="login__link fs-200 mg-right-20 tr-200"
			href={ social.link }
			title={ social.title }
			key={ uuidv4() }
		>
			<Icon icon={['fab', social.icon]} />
		</a>
	));

	return (
		<div className="login ctn h-100 f-row-center-center">
			<div className="login__window w-70 w-xlg-90 w-md-100 h-60 h-xlg-70 h-md-100 bg-white o-hidden">
				<div className="login__head f-row-between-center h-10 o-hidden">
					<h1 className="pd-left-20">
						<Icon icon={['fas', 'handshake']} /> Salama namana !
					</h1>
					<p className="login__social">{ mappedSocial }</p>
				</div>
				<div className="login__body f-col-center-center h-90">
					<div>
					<h2 className="tx-center pd-20 fs-300">Login</h2>
					<p className="tx-justify pd-20 pd-top-0">Welcome to my instant message platform. I'm trying my best to give you the best app for communicating with your family and friends from anywhere in the world. Stay connected with them anytime with total privacy. See you there !</p>
					<form className="w-80 mg-auto f-col-center-initial">
						<input
							className="w-100 pd-20 pd-top-10 pd-bottom-10 border-none border mg-bottom-20 bg-whitesmoke"
							type="text"
							placeholder="Enter your ID"
						/>
						<input
							className="w-100 pd-20 pd-top-10 pd-bottom-10 border-none border mg-bottom-20 bg-whitesmoke"
							type="password"
							placeholder="Enter your password"
						/>
						<Button className="mg-bottom-20">Get in</Button>
					</form>
					<p className="tx-center red mg-bottom-20">This is a caption.</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Login;