import React, { useRef } from "react";
import { useUser } from "../../hooks/useUser";
import { useFormik } from "formik";
import { validationSchema } from "../../helper/form-validation.helper";
import { useNavigate } from "react-router-dom";
import "./SignupForm.css";

// Signup Form component
const SignupForm = () => {
	// extracting dispatcher from useUser
	const { dispatchSetUserData } = useUser();
	// useNavigate for navigation
	const navigate = useNavigate();

	// extracting formik helper functions and values
	// from useFormik
	const {
		handleChange,
		handleReset,
		handleSubmit,
		handleBlur,
		setFieldValue,
		values,
		errors,
		dirty,
		touched,
		isSubmitting,
	} = useFormik({
		initialValues: {
			profile: null,
			name: "",
			email: "",
			contact: "",
			password: "",
			confirm_password: "",
		},
		// onSubmit handler
		onSubmit: (values, { resetForm }) => {
			// dispatching setUser
			dispatchSetUserData({
				name: values.name,
				profile: URL.createObjectURL(values.profile),
				email: values.email,
				contact: values.contact,
				password: values.password,
			});
			// clearign ref
			fileRef.current.value = "";
			// reseting form
			resetForm();
			// redirecting to /home
			navigate("/home");
		},
		// to validagte schema
		validationSchema,
	});

	const fileRef = useRef();

	// checking errors
	const checkErrors = () => {
		return errors.confirm_password &&
			errors.password &&
			errors.contact &&
			errors.name &&
			errors.email &&
			errors.profile
			? true
			: false;
	};

	return (
		<div
			// conditional styling
			className={
				checkErrors() ? "form-container" : "form-container  form-center"
			}
		>
			<h3 className="form-header">SignUp</h3>
			{/* formik form with validation */}
			<div className="main-form">
				{/* form submit handler */}
				<form onSubmit={handleSubmit}>
					{/* user-profile */}
					<label className="form-label" htmlFor="profile">
						Photo+{" "}
					</label>
					<input
						type={"file"}
						ref={fileRef}
						onChange={(e) => {
							setFieldValue("profile", e.currentTarget.files[0]);
						}}
						onBlur={handleBlur}
						id="profile"
						name="profile"
						className={"file"}
					/>
					{/* user-profile error show */}
					{errors.profile && touched.profile && (
						<div className="input-feedback">{errors.profile}</div>
					)}
					{/* !user-profile */}

					{/* user - name */}
					<label className="form-label" htmlFor="name">
						Name
					</label>
					<input
						type={"text"}
						id="name"
						value={values.name}
						onChange={handleChange}
						className={
							errors.name && touched.name
								? "form-control error"
								: "form-control"
						}
					/>
					{/* user - name error show */}
					{errors.name && touched.name && (
						<div className="input-feedback">{errors.name}</div>
					)}
					{/* !user - name */}

					{/* user - email */}
					<label className="form-label" htmlFor="email">
						Email
					</label>
					<input
						type={"email"}
						id="email"
						value={values.email}
						onChange={handleChange}
						className={
							errors.email && touched.email
								? "form-control error"
								: "form-control"
						}
					/>
					{/* user - email error show */}
					{errors.email && touched.email && (
						<div className="input-feedback">{errors.email}</div>
					)}
					{/* !user - email */}

					{/* user - contact */}
					<label className="form-label" htmlFor="contact">
						PhoneNo
					</label>
					<input
						type={"tel"}
						id="contact"
						value={values.contact}
						onChange={handleChange}
						className={
							errors.contact && touched.contact
								? "form-control error"
								: "form-control"
						}
					/>

					{/* user - contact error show */}
					{errors.contact && touched.contact && (
						<div className="input-feedback">{errors.contact}</div>
					)}
					{/* !user - contact */}

					{/* user - password */}
					<label className="form-label" htmlFor="password">
						Password
					</label>
					<input
						type={"password"}
						id="password"
						value={values.password}
						onChange={handleChange}
						className={
							errors.password && touched.password
								? "form-control error"
								: "form-control"
						}
					/>

					{/* user - password error show */}
					{errors.password && touched.password && (
						<div className="input-feedback">{errors.password}</div>
					)}
					{/* !user - password */}

					{/* user - confirm password */}
					<label className="form-label" htmlFor="confirm_password">
						Confirm Password
					</label>
					<input
						type={"password"}
						id="confirm_password"
						value={values.confirm_password}
						onChange={handleChange}
						className={
							errors.confirm_password && touched.confirm_password
								? "form-control error"
								: "form-control"
						}
					/>
					{/* user - confirm password error show*/}
					{errors.confirm_password && touched.confirm_password && (
						<div className="input-feedback">{errors.confirm_password}</div>
					)}
					{/* !user - confirm password */}

					<br />
					{/* submit and reset buttons */}
					<button
						type="button"
						className="btn btn-primary"
						onClick={handleSubmit}
						disabled={isSubmitting}
					>
						Submit
					</button>
					<button
						type="button"
						className="btn btn-danger"
						onClick={() => {
							fileRef.current.value = "";
							handleReset();
						}}
						disabled={!dirty || isSubmitting}
					>
						Reset
					</button>
				</form>
			</div>
		</div>
	);
};

export default SignupForm;
