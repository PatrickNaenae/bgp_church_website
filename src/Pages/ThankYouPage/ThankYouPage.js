import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import bgImg from "../../images/Thank_You.png";
import "./thankYouPage.css";

const ThankYouPage = () => {
	let navigate = useNavigate();
	let formSubmitted = localStorage.getItem("formSubmitted");
	const routeChange = () => {
        formSubmitted = localStorage.removeItem("formSubmitted");
		let path = "/";
		navigate(path);
	};

	if (!formSubmitted) {
		return <Navigate to='/' />;
	}

	return (
		<div className='thank-you__container'>
			<div className='bg__img__container'>
				<img className='img' src={bgImg} alt='Thank you' />
			</div>
			<div className='thank-you__text'>
				<h1>Thank you for filling the membership form</h1>
				<button className='button-85' onClick={routeChange}>
					<span className='text'>Back to Homepage</span>
				</button>
			</div>
		</div>
	);
};

export default ThankYouPage;
