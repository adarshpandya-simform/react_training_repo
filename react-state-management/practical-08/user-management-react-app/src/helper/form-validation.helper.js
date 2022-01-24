import * as Yup from "yup";
import "yup-phone";

// a helper function for validating
// formik schema using Yup and Yup-phone
export const validationSchema = () => {
	return Yup.object().shape({
		name: Yup.string().trim().min(15).required("Name is required!!!"),
		email: Yup.string().email().required("Email is required!!!"),
		contact: Yup.string().phone("IN").required("PhoneNo is required!!!"),
		password: Yup.string()
			.matches(
				/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
				"Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
			)
			.required("Password is required"),
		confirm_password: Yup.string()
			.oneOf([Yup.ref("password"), null], "Passwords Must Match")
			.required("Confirm Password is required"),
		profile: Yup.mixed()
			.nullable()
			.required("profile is required!!!")
			.test("fileSize", "photo is too large", (value) => {
				return !value || (value !== null && value.size <= 2000000);
			})
			.test("fileType", "image type should be jpg or png only", (value) => {
				return (
					!value ||
					(value !== null && ["image/jpg", "image/png"].includes(value.type))
				);
			}),
	});
};
