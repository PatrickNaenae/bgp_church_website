import React, { useState } from "react";
import axios from "axios";
import validator from "validator";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
// import ThankYouPage from "../../Pages/ThankYouPage/ThankYouPage";
import "./form.css";

const Form = () => {
	let navigate = useNavigate();
	const [value, setValue] = useState();
	const csrftoken = Cookies.get("csrftoken");
	const [formData, setFormData] = useState({
		first_name: "",
		last_name: "",
		email: "",
		dob: "",
		phone: "",
		occupation: "student",
		membership: "first timer",
		address: "",
		department: "",
		gender: "male",
		profile_img: null,
	});
	const [firstNameError, setFirstNameError] = useState("");
	const [lastNameError, setLastNameError] = useState("");
	const [emailError, setEmailError] = useState("");
	const [phoneError, setPhoneError] = useState("");
	const [dobError, setDobError] = useState("");
	const [pictureImg, setPictureImg] = useState(false);
	const [formSubmitted, setFormSubmitted] = useState(false);
	const [isFirstNameValid, setIsFirstNameValid] = useState(true);
	const [isLastNameValid, setIsLastNameValid] = useState(true);
	const [isEmailValid, setIsEmailValid] = useState(true);
	const [isPhoneValid, setIsPhoneValid] = useState(true);
	const [isDobValid, setIsDobValid] = useState(true);
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
	};

	const handleImageChange = (event) => {
		const { name, files } = event.target;
		setFormData((prevFormData) => ({ ...prevFormData, [name]: files[0] }));
		handleImageUpload(event.target.value);
	};

	async function checkEmail(email) {
		try {
			const response = await axios.get(
				`https://rccgbgp.org.ng/api/check_if_exists/email/${email}`
			);
			return response.data.success;
		} catch (error) {
			// console.error("An error occurred while checking the email:", error);
			return false;
		}
	}

	async function checkPhone(phone) {
		try {
			const response = await axios.get(
				`https://rccgbgp.org.ng/api/check_if_exists/phone/${phone}`
			);
			return response.data.success;
		} catch (error) {
			// console.error(
			// 	"An error occurred while checking the phone number:",
			// 	error
			// );
			return false;
		}
	}

	function handleImageUpload(e) {
		setPictureImg(true);

		setIsSubmitting(true);
		// Hide the message after 2.5 seconds
		setTimeout(() => setPictureImg(""), 2500);
	}

	const handleSubmit = async (event) => {
		event.preventDefault();

		// Validate the email, phone, and picture fields
		const emailExists = await checkEmail(formData.email);
		const phoneExists = await checkPhone(value);

		// First name validation
		if (formData.first_name === "") {
			setFirstNameError("First name is a required field");
			setIsFirstNameValid(false);
			setTimeout(() => setFirstNameError(""), 2500);
			setTimeout(() => setIsFirstNameValid(true), 2500);
			return;
		} else if (!formData.first_name.match(/^[a-zA-Z]+$/)) {
			setFirstNameError("First name must contain only letters");
			setIsFirstNameValid(false);
			setTimeout(() => setFirstNameError(""), 2500);
			setTimeout(() => setIsFirstNameValid(true), 2500);
			return;
		} else {
			setFirstNameError("");
		}

		// Last name validation
		if (formData.last_name === "") {
			setLastNameError("Last name is a required field");
			setIsLastNameValid(false);
			setTimeout(() => setLastNameError(""), 2500);
			setTimeout(() => setIsLastNameValid(true), 2500);
			return;
		} else if (!formData.last_name.match(/^[a-zA-Z]+$/)) {
			setLastNameError("Last name must contain only letters");
			setIsLastNameValid(false);
			setTimeout(() => setLastNameError(""), 2500);
			setTimeout(() => setIsLastNameValid(true), 2500);
			return;
		} else {
			setLastNameError("");
		}

		// Email validation
		if (formData.email === "") {
			setEmailError("Email field is required");
			setIsEmailValid(false);
			setTimeout(() => setEmailError(""), 2500);
			setTimeout(() => setIsEmailValid(true), 2500);
			return;
		} else if (!validator.isEmail(formData.email)) {
			setEmailError("Invalid email address");
			setIsEmailValid(false);
			setTimeout(() => setEmailError(""), 2500);
			setTimeout(() => setIsEmailValid(true), 2500);
			return;
		} else {
			// Check if email is unique
			if (emailExists) {
				setEmailError("An account with this email already exists.");
				setIsEmailValid(false);
				setTimeout(() => setEmailError(""), 2500);
				setTimeout(() => setIsEmailValid(true), 2500);
				return;
			} else {
				setEmailError("");
			}
		}

		// Date of birth validation
		if (formData.dob === "") {
			setDobError("Date of Birth is a required field");
			setIsDobValid(false);
			setTimeout(() => setDobError(""), 2500);
			setTimeout(() => setIsDobValid(true), 2500);
			return;
		} else if (!formData.dob.match(/^[A-Za-z]+\s\d{1,2}\s\d{4}$/)) {
			setDobError('DOB format "Month Day Year"');
			setIsDobValid(false);
			setTimeout(() => setDobError(""), 2500);
			setTimeout(() => setIsDobValid(true), 2500);
			return;
		} else {
			setDobError("");
		}

		// Phone number validation
		const isPhoneNumberValid = /^\+234\d{10}$/.test(value);

		if (!isPhoneNumberValid) {
			setPhoneError(
				"Phone number must be 11 digits and Phone number should be in the format +234-XXX-XXX-XXXX"
			);
			setIsPhoneValid(false);
			setTimeout(() => setPhoneError(""), 2500);
			setTimeout(() => setIsPhoneValid(true), 2500);
			return;
		} else {
			// Check if phone number is unique
			if (phoneExists) {
				setPhoneError(
					"An account with this phone number already exists."
				);
				setIsPhoneValid(false);
				setTimeout(() => setPhoneError(""), 2500);
				setTimeout(() => setIsPhoneValid(true), 2500);
				return;
			} else {
				setPhoneError("");
			}
		}

		const formDataToSend = new FormData();

		formDataToSend.append("first_name", formData.first_name);
		formDataToSend.append("last_name", formData.last_name);
		formDataToSend.append("email", formData.email);
		formDataToSend.append("dob", formData.dob);
		formDataToSend.append("phone", value);
		formDataToSend.append("occupation", formData.occupation);
		formDataToSend.append("membership", formData.membership);
		formDataToSend.append("address", formData.address);
		formDataToSend.append("department", formData.department);
		formDataToSend.append("gender", formData.gender);
		formDataToSend.append("profile_img", formData.profile_img);

		try {
			const response = await fetch(
				"https://rccgbgp.org.ng/api/create-member",
				{
					method: "POST",
					mode: "same-origin",
					headers: {
						"X-CSRFToken": csrftoken,
					},
					body: formDataToSend,
				}
			);

			const result = await response.json();
			console.log("Success:", result);

			if (response.ok) {
				navigate("/thank-you");
			} else if (!response.ok) {
				// if the response is not OK, throw an error
				throw new Error("Network response was not OK");
			} else {
				console.error("Error submitting form:", response.statusText);
			}
		} catch (error) {
			// handle the error here
			console.error(error);
			alert(
				"There was a problem submitting the form. Please try again later."
			);
		} finally {
			setIsSubmitting(false); // set isSubmitting back to false to re-enable the submit button
		}
		localStorage.setItem("formSubmitted", true);
		setFormSubmitted(true);
	};

	// if (formSubmitted) {
	// 	return <ThankYouPage />;
	// }

	return (
		<div className='container'>
			<form className='registration-form' onSubmit={handleSubmit}>
				<h1>Please Fill the Membership Form</h1>
				<input
					type='hidden'
					name='csrfmiddlewaretoken'
					value={csrftoken}
				/>
				<label
					className={
						isFirstNameValid
							? "valid col-one-half"
							: "invalid col-one-half"
					}
					htmlFor='first_name'>
					<span className='label-text'>First Name</span>
					<input
						type='text'
						id='first_name'
						name='first_name'
						value={
							firstNameError
								? firstNameError
								: formData.first_name
						}
						className={
							firstNameError ? "invalid__input" : "valid__input"
						}
						onChange={handleChange}
						placeholder='John'
					/>
				</label>
				<label
					className={
						isLastNameValid
							? "valid col-one-half"
							: "invalid col-one-half"
					}
					htmlFor='last_name'>
					<span className='label-text'>Last Name</span>
					<input
						type='text'
						id='last_name'
						name='last_name'
						value={
							lastNameError ? lastNameError : formData.last_name
						}
						className={
							lastNameError ? "invalid__input" : "valid__input"
						}
						onChange={handleChange}
						placeholder='Doe'
					/>
				</label>
				<label
					className={
						isEmailValid
							? "valid col-one-half"
							: "invalid col-one-half"
					}
					htmlFor='email'>
					<span className='label-text'>Email</span>
					<input
						type='email'
						id='email'
						name='email'
						value={emailError ? emailError : formData.email}
						className={
							emailError ? "invalid__input" : "valid__input"
						}
						onChange={handleChange}
						placeholder='example@email.com'
					/>
				</label>
				<label className='valid col-one-half' htmlFor='address'>
					<span className='label-text'>Home Address</span>
					<input
						type='text'
						id='address'
						name='address'
						value={formData.address}
						onChange={handleChange}
						placeholder='1, Maryland Drive'
					/>
				</label>
				<label
					className={
						isDobValid
							? "valid col-one-half"
							: "invalid col-one-half"
					}
					htmlFor='dob'>
					<span className='label-text'>Date of Birth</span>
					<input
						type='text'
						id='dob'
						name='dob'
						value={dobError ? dobError : formData.dob}
						className={dobError ? "invalid__input" : "valid__input"}
						onChange={handleChange}
						placeholder='January 1 1970'
					/>
				</label>
				<label className='valid col-one-half' htmlFor='department'>
					<span className='label-text'>Department in Church</span>
					<input
						type='text'
						id='department'
						name='department'
						value={formData.department}
						onChange={handleChange}
						placeholder='choir'
					/>
				</label>
				<label
					className={isPhoneValid ? "valid" : "invalid"}
					htmlFor='phone'>
					<span className='label-text'>Phone Number</span>
					<PhoneInput
						international
						countryCallingCodeEditable={false}
						defaultCountry='NG'
						name='phone'
						value={value}
						onChange={setValue}
						placeholder='212121212'
					/>
				</label>
				{phoneError && <p className='phone__error'>{phoneError}</p>}
				<label className='valid' htmlFor='occupation'>
					<span className='label-text'>Occupation</span>
					<select
						value={formData.occupation}
						name='occupation'
						onChange={handleChange}>
						<option disabled>--Select an option--</option>
						<option value='student'>Student</option>
						<option value='business'>Business</option>
						<option value='corporate'>Corporate</option>
						<option value='unemployed'>Unemployed</option>
						<option value='others'>Others</option>
					</select>
				</label>
				<label className='valid' htmlFor='membership'>
					<span className='label-text'>Membership</span>
					<select
						value={formData.membership}
						name='membership'
						onChange={handleChange}>
						<option disabled>--Select an option--</option>
						<option value='first timer'>First Timer</option>
						<option value='member'>Member</option>
						<option value='worker'>worker</option>
						<option value='minister'>Minister</option>
					</select>
				</label>
				<label className='valid' htmlFor='gender'>
					<span className='label-text'>Gender</span>
					<select
						value={formData.gender}
						name='gender'
						onChange={handleChange}>
						<option disabled>--Select an option--</option>
						<option value='male'>Male</option>
						<option value='female'>Female</option>
					</select>
				</label>
				<label className='custom-file-upload'>
					<input
						type='file'
						accept='image/jpeg,image/png,image/gif'
						alt='profile_pics'
						id='profile_img'
						name='profile_img'
						onChange={handleImageChange}
					/>
					Upload Your Picture Here
				</label>
				{pictureImg && (
					<p className='img__text'>Successfully Uploaded</p>
				)}
				<button className='btn__rainbow'>
					{isSubmitting ? "Submitting..." : "Submit"}
				</button>
			</form>
		</div>
	);
};

export default Form;
