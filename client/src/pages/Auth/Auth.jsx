/** @format */

import { jwtDecode } from "jwt-decode";
import { GoogleLogin } from "@react-oauth/google";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Auth = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const googleFailure = async () => {
		console.log("Google Signin Not SuccessFull");
	};

	const googleSuccess = async (res) => {
		console.log("Signin SuccessFull");
		const token = jwtDecode(res?.credential);
		console.log(token);

		try {
			await dispatch({ type: "AUTH", data: { result: res, token } });
			navigate("/home");
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<section className="container mx-auto flex justify-center items-center h-screen">
			<div className="login-register bg-purple-900 rounded-lg p-8 shadow-lg text-center">
				<div className="header mb-6">
					<div className="logo text-5xl mb-4 text-orange-500">👓</div>
					<h2 className="text-white text-2xl font-semibold">
						Enter phone number
					</h2>
				</div>
				<form>
					<div>
						<GoogleLogin
							clientId="700021542217-6gp4ae8h5c8tdbs8dn1mmfs1avrurh2c.apps.googleusercontent.com"
							auto_select={true}
							onSuccess={googleSuccess}
							onFailure={googleFailure}
							shape="circle"
							text="Sign in with Google"
						/>
					</div>
				</form>
			</div>
		</section>
	);
};

export default Auth;
